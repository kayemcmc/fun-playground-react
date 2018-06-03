import React from 'react';
import Slider from './Slider';

const SinglePanel = (props) => {
  return (
    <div className="col-md-4">
    <div className="card mb-4 box-shadow">
      <Slider />
      <div className="card-body">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SinglePanel;