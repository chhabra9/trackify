//jshint esversion:8
import React from "react";
import "./Homes.css";
import{
NavLink
}from "react-router-dom";

const footer=()=>{
    return(
        <>
<div className="footer">

<div className="about">
  <h3>ABOUT US</h3>
  <img src="./images/logo.jpg"></img>
  <p>TRACKIFY stands for Quality and Class.<br></br> 
  Need any assistance with your vehicle, <br></br>
  allow us to quickly identify and solve the problem.<br></br>
   With our hassle free services, we aim <br></br>
   to be your one window solution provider.</p>
</div>

<div className="about">
  <h3>WORKING HOURS</h3>
  <p>Our mechanics work everyday,<br></br>
     while our customer support team <br></br>
     rests on weekends and major holidays. <br></br>
     You can connect with us through Hotline <br></br>
     and Contact form.<br></br>
     <br></br>
      Days: Monday - Sunday  <br></br>Time:07:00hrs. - 22:00hrs.</p>
</div>
<div className="about">
  <h3>SERVICES</h3>
 
     <ul> 
       <li><NavLink exact to="/" className="fsnav" activeClassName="menu_Link">Accidental Help</NavLink></li> 
<li><NavLink exact to="/Service" className="fsnav" activeClassName="menu_Link">Spare wheels</NavLink></li> 
     <li> <NavLink exact to="/store" className="fsnav" activeClassName="menu_Link">Car wash</NavLink></li> 
    <li> <NavLink exact to="/Contact" className="fsnav" activeClassName="menu_Link">Emergency repair</NavLink></li> 
    <li> <NavLink exact to="/Contact" className="fsnav" activeClassName="menu_Link">Other Services</NavLink></li>       
           </ul>
</div>
     <div className="about">
  <h3>EXTRA</h3>
  <ul> 
       <li><NavLink exact to="/" className="fsnav" activeClassName="menu_Link">Accidental Help</NavLink></li> 
<li><NavLink exact to="/Service" className="fsnav" activeClassName="menu_Link">Spare wheels</NavLink></li> 
     <li> <NavLink exact to="/store" className="fsnav" activeClassName="menu_Link">Car wash</NavLink></li> 
    <li> <NavLink exact to="/Contact" className="fsnav" activeClassName="menu_Link">Emergency repair</NavLink></li> 
    <li> <NavLink exact to="/Contact" className="fsnav" activeClassName="menu_Link">Other Services</NavLink></li>       
           </ul>  
    </div>

</div>

<div className="last">

   <div className="text"><p>Copyright © 2021 - TRACKIFY Inc. - All rights reserved</p></div>
   

 <div className="chlja">
 <ul className="lastnav"> 
       <li><NavLink exact to="/about" className="lmenu" activeClassName="menu_Link">About</NavLink></li> 
<li><NavLink exact to="/Service" className="lmenu" activeClassName="menu_Link">Services</NavLink></li> 
     <li> <NavLink exact to="/contact" className="lmenu" activeClassName="menu_Link">Contact</NavLink></li> 
     <li><button exact to ="/header" className="top">top</button></li>
 </ul></div>
</div> 
</>
)
}
export default footer;