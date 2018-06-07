import React, { Component } from 'react';
import { data } from '../../data';
import './Work.css';
import PanelList from '../workPanel/PanelList';

class Work extends Component {
  constructor() {
    super()
    this.state = {
      data: data
    }
  }
  render() {
    return !data.length ?
    <h1>Loading</h1> :
    (
      <div class="container-fluid">
      <div class="row">
        <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar mobile-hide bg-gray">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">Overview <span class="sr-only">(current)</span></a>
            </li>
          </ul>

          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
          
            </li>
            <li class="nav-item">
              
            </li>
            <li class="nav-item">
             
            </li>
            <li class="nav-item">
              
            </li>
          </ul>
        </nav>

        <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h2>Section title</h2>

          <section>
          <PanelList data={this.state.data} />           
          </section>
        </main>
      </div>
    </div>
    )
  }
}

export default Work;
