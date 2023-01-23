import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import './Customerauthnavbar.css'
function Customerauthnavbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"forestgreen"}}>
      <div class="container-fluid">
        <img
          src={logo}
          class="navbar-brand img-thumbnail"
          width="5%"
          href="#"
        ></img>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link
              className="nav-item nav-link"
              id="home"
              to="/consumer/dashboard"
            >
              Dashboard<span className="sr-only"></span>
            </Link>
            <Link className="nav-item nav-link" to="/consumer/myorder">
              Your orders
            </Link>
            <Link className="nav-item nav-link" to="/consumer/myneworder">
              New order
            </Link>
            <Link className="nav-item nav-link " to="/consumer/query">
              Raise query
            </Link>
            <a className="nav-item nav-link " href="/">
              logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Customerauthnavbar;
