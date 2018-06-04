import React, { Component } from 'react';
import SinglePanel from '../workPanel/SinglePanel'

export default class Work extends Component {
  render() {
    return (
      <div className="wrapper" style={{display: 'flex'}}>
        <nav className="sidebar" style={{minWidth: '250px', maxWidth: '250px', height: '100vh'}}>
            <div className="sidebar-header">
                <h3>Collapsible Sidebar</h3>
            </div>
        </nav>
        <div className="content p-5">
        
            <div className="row">
            <SinglePanel img1={`http://placehold.it/1000x400/ffffff/c0392b/&text=slide1`} img2={`http://placehold.it/1000x400/ffffff/c0392b/&text=slide2`} img3={`http://placehold.it/1000x400/ffffff/c0392b/&text=slide3`}/>
            <SinglePanel img1={`http://placehold.it/1000x400/ffffff/c0392b/&text=slide1`} img2={`http://placehold.it/1000x400/ffffff/c0392b/&text=slide2`} img3={`http://placehold.it/1000x400/ffffff/c0392b/&text=slide3`}/>
            <SinglePanel img1={`http://placehold.it/1000x400/ffffff/c0392b/&text=slide1`} img2={`http://placehold.it/1000x400/ffffff/c0392b/&text=slide2`} img3={`http://placehold.it/1000x400/ffffff/c0392b/&text=slide3`}/>
            <SinglePanel img1={`http://placehold.it/1000x400/ffffff/c0392b/&text=slide1`} img2={`http://placehold.it/1000x400/ffffff/c0392b/&text=slide2`} img3={`http://placehold.it/1000x400/ffffff/c0392b/&text=slide3`}/>
            </div>
        </div>
      </div>
    )
  }
}
