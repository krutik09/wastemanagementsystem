import React from "react";
import './Footer.css';
import logo from './logo.png'

export default function Footer(){
    return(
        <>
     <div className="footer ">

        <div class="text-center" id='foot'>
        <div class="row">
     <div class="col  ">
     <img className="logo2"  src={logo}  alt="First" /><br/>
     <div className="text">
     <b><h1>VALUE OF WASTE</h1></b></div>
     </div>
     <div class="col">
    </div>
    <div class="col ">
      <b>Join us</b><br/>
      to something<br/>
      to something<br/>
      to something<br/>
      to something<br/>
      <br/>
    
      <b>Contact us</b><br/>
      +9876543210
      <br/><br/><br/>

      </div>
     </div>
     </div>
        </div>
        </>
    )
} 