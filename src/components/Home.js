import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './icon/Icon';


class Home extends Component {
  render() {
    return (
        <div>
        <div className="container">
        <div className="pt-5 pt-5 mt-5 row">
            <div className="col-md-6 mt-3">
               <TitleFirst>KAREN</TitleFirst>
               <TitleLast>POSADA</TitleLast>
               <Intro>I really love to code. 
              My favorite stack: React, Redux, Node, MongoDB. Ready to start browsing? Click on the happy bulb <span className="mobile-hide arrow"> &rarr;</span></Intro>
            </div>
            <div className="col-md-6 pt-4 mx-auto">
            <Link to="/work" className="cursor-pointer"> <Icon /></Link>
            </div>
        </div>
      </div>
      </div>
    )
  }
}

const TitleFirst = styled.p`
  color: #5762f2;
  font-weight: 900;
  font-size:7em;
  margin-bottom: -.5em;
  @media (max-width: 420px) {
    font-size: 6em;
  }
`
const TitleLast = styled.p`
  color: #14cdec;
  font-weight: 900;
  font-size:6em;
  @media (max-width: 420px) {
    font-size: 5em;
  }
`
const Intro = styled.p`
  margin-bottom: -10px;
  font-size: 1.6em;
  font-weight: 400;
  color: #4a4a4a;
`

export default Home;