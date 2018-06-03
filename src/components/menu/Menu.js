import React from 'react';
import styled from 'styled-components';
import background  from '../../img/cs-background.svg';
import bulb from '../../img/cs-bulb.svg';
import computer from '../../img/cs-window.svg';
import './Menu.css'

const Menu =  () => {
  return (
    <div>
      <IconWrapper>
       <img src={bulb} alt="icon-graphic" className="bulb" />    
       <img src={computer} alt="icon-computer" className="computer" />
       <img src={background} alt="icon-background" className="background" />       
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
      transform: scale(1.05);
    }
`;
export default Menu;