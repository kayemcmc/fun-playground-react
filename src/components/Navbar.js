import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow navbar-fixed">
    <Link to="/" className="my-0 mr-md-auto font-weight-normal"><h5  >KP</h5></Link>
    <nav className="my-2 my-md-0 mr-md-3">
      <Link className="p-2 navlink" to="/work">Work</Link>
      <Link className="p-2 navlink" to="/about">About</Link>
      <Link className="p-2 navlink" to="/contact">Contact</Link>
      <Link className="p-2 navlink" to="/games">Games</Link>
    </nav>
  </div>

  )
}

export default Navbar;