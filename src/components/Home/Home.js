import React from "react";
import {NavLink} from "react-router-dom";
import './Home.css'

import { color } from "@mui/system";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import Info from "../Info/Info";
import SignInSide from "../Signin/Signin";



export default function Home(){
    return(
        <>
  <h2 class="text-center my-2">Welcome to your first step towards waste management</h2>

<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1526951521990-620dc14c214b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzdGUlMjBtYW5hZ2VtZW50JTIwMjAwKjIwMHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="d-block w-100 im" height='500px' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1610725079793-6c7dfd7f2150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2FzdGUlMjBtYW5hZ2VtZW50JTIwMjAwKjIwMHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="d-block w-100 im" height='500px' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={"https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" }className="d-block w-100 im" height='500px' alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="cntnt"> <Content/></div>



<div> <Info/></div>
<div class="dataa">We help companies become more sustainable and progress towards a circular economy
</div>

<div> <Footer/> </div>


        </>
    )
}