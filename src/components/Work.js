import React, { Component } from 'react';
import SinglePanel from './workPanel/SinglePanel'

export default class Work extends Component {
  render() {
    return (
      <div className="container pt-5 mt-5">
        <div className="row">
        <SinglePanel/>
        </div>

      </div>
    )
  }
}
