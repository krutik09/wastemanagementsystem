import React from "react";
import logo from "./logo.png";
import './Noauthnavbar.css'
import { Link } from "react-router-dom";
const Noauthnavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#32CD32"}}>
  <div class="container-fluid">
    <img  src={logo} class="navbar-brand img-thumbnail" width="5%" href="#"></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
              <Link className="nav-item nav-link" id="home" to="/">
                Home 
              </Link>
              <Link className="nav-item nav-link" to="/StatsHome">
                Our Stats
              </Link>
              <Link className="nav-item nav-link" to="#">
                FAQ
              </Link>
              <Link className="nav-item nav-link " to="/ContactUs">
                Contact-us
              </Link>
              <Link className="nav-item nav-link " to="/SignInSide">
                Sign in
              </Link>
              <Link className="nav-item nav-link " to="/SignUpside">
                Sign up
              </Link>
         </div>
        </div>
      </div>
    </nav>
  );
};
export default Noauthnavbar;
