import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div class="container-fluid">
        {/* <a class="" href="#">Navbar</a> */}
        <Link to="/" class="navbar-brand">
          {" "}
          <h1 className="text-white">Practo</h1>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  ms-auto ml-4 mt-2">
            <li class="nav-item">
              {/* <a  aria-current="page" href="#">Home</a> */}
              {/* <Link to="/" class="nav-link active">
                {" "}
                Home
              </Link> */}
            </li>
            <li class="nav-item m">
              {/* <a class="nav-link" href="#">Link</a> */}
              <Link to="/about" class="nav-link active">
                {" "}
                <h5>About Us</h5>
              </Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#">Link</a> */}
              <Link to="/contact" class="nav-link active">
                {" "}
                <h5>Contact Us</h5>
              </Link>
            </li>
          </ul>
            <DropdownButton className=" ms-4 mb-3" id="dropdown-basic-button " title="Login/Signup">
              <Dropdown.Item href="/login">User Login</Dropdown.Item>
                <Dropdown.Item href="/signup">User Signup</Dropdown.Item>
              <Dropdown.Item href="/adminhome">Admin</Dropdown.Item>
            </DropdownButton>
                 
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
