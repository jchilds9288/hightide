import React from "react";
import "./nav.css";


const Nav = () => (
 

<nav className="navbar navbar-expand-lg htNav">
  <a className="navbar-brand" href="/">HT</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li> */}
    </ul>
    <span className="navbar-text">
    <a href="login" className="btn btn-outline-danger my-2 my-sm-0 " role="button">Login</a>
    <a href="signup" className="btn btn-outline-danger my-2 my-sm-0 " role="button">Sign-Up</a>
    </span>
  </div>
</nav>

);

export default Nav;
