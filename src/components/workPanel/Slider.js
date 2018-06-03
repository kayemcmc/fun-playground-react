import React from 'react';
import Carousel from 'nuka-carousel';

const Slider = ({img1, img2, img3}) => {
  return (
    <div>
      <Carousel>
      <img src={img1} />
      <img src={img2}/>
      <img src={img3} />
      </Carousel>
    </div>
  )
}

export default Slider;