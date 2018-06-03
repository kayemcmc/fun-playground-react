import React, { Component } from 'react';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';

const imgUrls = [
	"https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781", 
	"https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
	"https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
	"https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
	"https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
];

export default class Slider extends Component {
  constructor(props) {
      super(props);
      this.state= {
        currentImageIndex: 0
      }
  }
  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }
  render(props) {
    return (
      <div className="slider">
        <Arrow 
          direction="left"
          handleClick={this.previousSlide}
          glyph="&#9664;"
        />
        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
        <Arrow 
        direction="right"
        handleClick={this.nextSlide}
        glyph="&#9654;"
      />
      </div>
    )
  }
}