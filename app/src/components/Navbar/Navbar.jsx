import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      {/* Container wrapper */}
      <div className="container-fluid">
        {/* Toggle button */}
        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <Link className="navbar-brand mt-2 mt-lg-0" to="/">
          <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehbIRdC7RbRGTWVWQQxvHFXKCtBa0W6GjSQ&s" 
        alt="Brand Logo" 
        style={{ height: '80px' }} 
    />          </Link>
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            {/* If there's a non-navigational item, consider using a button */}
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => alert('Action triggered!')}>
                Action
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/datalist">DataList</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apidata">ApiData</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
