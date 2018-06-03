import React from 'react';
import styled from 'styled-components';
import background  from '../../img/cs-background.svg';
import bulb from '../../img/cs-bulb.svg';
import computer from '../../img/cs-window.svg';
import './Icon.css'

const Icon =  () => {
  return (
    <div>
      <IconWrapper>
       <img src={bulb} alt="icon-graphic icon" className="bulb" />    
       <img src={computer} alt="icon-computer icon" className="computer" />
       <img src={background} alt="icon-background icon" className="background" /> 
      </IconWrapper>
    </div>
  )
}

const IconWrapper = styled.div`
    position: relative;
    margin: 0px auto;
    padding-top: 40px;
    transition: 1s;
    &:hover {
      transform: scale(1.03);
    }
`;
export default Icon;