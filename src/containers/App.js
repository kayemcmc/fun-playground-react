import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Menu from '../components/menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="pt-5 mt-5 row">
            <div className="col-md-5 mt-5">
               <TitleFirst>KAREN</TitleFirst>
               <TitleLast>POSADA</TitleLast>
            </div>
            <div className="col-md-7">
            <Menu />
            </div>
        </div>
      </div>
    );
  }
}

const TitleFirst = styled.p`
  color: #5762f2;
  font-weight: 900;
  font-size:8em;
  margin-bottom: -.5em;
`
const TitleLast = styled.p`
  color: #14cdec;
  font-weight: 900;
  font-size:7em;
`

export default App;
