import React from 'react';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';

const SinglePanel = (props) => {

  
  const {img1, img2, img3, title, language, url, description, styleBg} = props;
  return (
    <div className="col-md-4">
    <div className="card mb-4 box-shadow">
    <Carousel>
    <Image src={img1} alt="portfolio-a"/>
    <Image src={img2} alt="portfolio-b"/>
    <Image src={img3} alt="portfolio-c"/>
    </Carousel>
      <div className="card-body text-center" style={{backgroundColor: styleBg, color: '#f4f4f4'}}>
        <h3 classNme="text-center">{title}</h3>
        <p>{language}</p>
        <a href={url}>View Project</a>
        <p class="card-text">{description}</p>
      </div>
    </div>
  </div>
  )
}

const Image = styled.img`
  width: 330px;
`;
export default SinglePanel;