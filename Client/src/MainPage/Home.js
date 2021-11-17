import React from 'react';
import Navbar from './Navbar';
import {Switch,Route}from "react-router-dom";
import Slide from './Slide';
import './Slide.css';
import './Navbar.css';
import Service from './Service';
import Contact from './Contact';
import Store from './Store';
import { NavLink } from 'react-router-dom';
import About from './Aboutus';

import Sliderhome2 from './Sliderhome2';
import Sliderhome3 from './Sliderhome3';

export default class Home extends React.Component{
	render()
	{
		return(
    
		<div>
              <div className="header">
      <div className="logo" > <img src="/images/trackifylogo.jpg"alt="asgfsdg" ></img>
     </div>
      
    <div className="menu"> 
    <Navbar className="Navbar">
  
     <Switch className="switch">
      <Route exact path="/" component={Home}></Route>
        <Route exact path="/service" component={Service}></Route>
       <Route exact path="/store" component={Store}></Route>
       <Route   path="/about" component={About}></Route>
        <Route   path="/contact" component={Contact}></Route>
     
      </Switch>
  </Navbar>
  </div> 
  </div>
 

  <div  className="Services">
   <h1 >SERVICES</h1>

<div className="provide">
          <div><img src="./images/Eservice.jpg"alt="serivices"></img>
           <h3 className="threeD">Service</h3></div>
          <div><img src="./images/fastag.jpeg"alt="serivices">
           </img> <h3>Fastag</h3></div>
           <div><img src="./images/sparewheels.jpeg"alt="serivices">
            </img> <h3>Sparewheels</h3></div>
 </div>

 <div className="provide">
           <div><img src="./images/carwash.png"alt="serivices"></img>
           <h3>Carwash</h3></div>
           <div><img src="./images/schedule.png"alt="serivices"></img>
           <h3>Schedule</h3></div>
          <div><img src="./images/battery.jpg"alt="serivices"></img>
          <h3>Battery</h3></div>
 </div>

 </div>

 <div className="slider2"><Sliderhome2></Sliderhome2></div>
 <div className="Store">
 <h1 >OUR STORE</h1>

<div className="provide">
          <div><img src="./images/accesories.png"alt="serivices"></img>
          <h3>CAR ACCESSORIES</h3></div>
          <div><img src="./images/ridinggear.jpg"alt="serivices">
           </img> <h3>RIDING GEAR</h3></div>
          <div><img src="./images/spareparts.jpg"alt="serivices">
            </img> <h3>SPARE PARTS</h3></div>
 </div>
 </div>

 <div className="slider3">
   <Sliderhome3 ></Sliderhome3>
 </div>


{/* // <div className="footer">

// <div className="about">
//   <h3>ABOUT US</h3>
//   <img src="./images/logo.jpg"></img>
//   <p>TRACKIFY stands for Quality and Class.<br></br> 
//   Need any assistance with your vehicle, <br></br>
//   allow us to quickly identify and solve the problem.<br></br>
//    With our hassle free services, we aim <br></br>
//    to be your one window solution provider.</p>
// </div>

// <div className="about">
//   <h3>WORKING HOURS</h3>
//   <p>Our mechanics work everyday,<br></br>
//      while our customer support team <br></br>
//      rests on weekends and major holidays. <br></br>
//      You can connect with us through Hotline <br></br>
//      and Contact form.<br></br>
//      <br></br>
//       Days: Monday - Sunday  <br></br>Time:07:00hrs. - 22:00hrs.</p>
// </div>
// <div className="about">
//   <h3>SERVICES</h3>
 
//      <ul> 
//        <li><NavLink exact to="/" className="fsnav" activeClassName="menu_Link">Accidental Help</NavLink></li> 
// <li><NavLink exact to="/Service" className="fsnav" activeClassName="menu_Link">Spare wheels</NavLink></li> 
//      <li> <NavLink exact to="/store" className="fsnav" activeClassName="menu_Link">Car wash</NavLink></li> 
//     <li> <NavLink exact to="/Contact" className="fsnav" activeClassName="menu_Link">Emergency repair</NavLink></li> 
//     <li> <NavLink exact to="/Contact" className="fsnav" activeClassName="menu_Link">Other Services</NavLink></li>       
//            </ul>
// </div>
//      <div className="about">
//   <h3>EXTRA</h3>
//   <ul> 
//        <li><NavLink exact to="/" className="fsnav" activeClassName="menu_Link">Accidental Help</NavLink></li> 
// <li><NavLink exact to="/Service" className="fsnav" activeClassName="menu_Link">Spare wheels</NavLink></li> 
//      <li> <NavLink exact to="/store" className="fsnav" activeClassName="menu_Link">Car wash</NavLink></li> 
//     <li> <NavLink exact to="/Contact" className="fsnav" activeClassName="menu_Link">Emergency repair</NavLink></li> 
//     <li> <NavLink exact to="/Contact" className="fsnav" activeClassName="menu_Link">Other Services</NavLink></li>       
//            </ul>  
//     </div>

// </div>

// <div className="last">

//    <div className="text"><p>Copyright © 2021 - TRACKIFY Inc. - All rights reserved</p></div>
   

//  <div className="chlja">
//  <ul className="lastnav"> 
//        <li><NavLink exact to="/about" className="lmenu" activeClassName="menu_Link">About</NavLink></li> 
// <li><NavLink exact to="/Service" className="lmenu" activeClassName="menu_Link">Services</NavLink></li> 
//      <li> <NavLink exact to="/contact" className="lmenu" activeClassName="menu_Link">Contact</NavLink></li> 
//      <li><button exact to ="/header" className="top">top</button></li>
//  </ul></div>
// </div>

 */}






            </div>
			
			
		)
	} 
}