import React from 'react';
import './Contact.css';
import './Fastag.css';
import './Emergency.css';
import './About.css';
import Home  from './Home';
import Service from './Service';
import {Switch,Route}from "react-router-dom";
import About from './Aboutus';
import Store from './Store';
import './App.css';
import Account from './Account';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';
import Navbar from './Navbar';
import Slide from './Slide';
import './Schedule.css';

export default class Schedule extends React.Component{
    render()
    {
        return(
            <h1>Hello shecdule</h1>
//             <div>

// <div className="header">
//      <div className="logo" > <img src="./images/logo.jpg"alt="asgfsdg" ></img>
//      </div>
      
//     <div className="menu"> 
//     {/* <Navbar className="Navbar">
  
//     <Switch className="switch">
//        <Route exact path="/" component={Home}></Route>
//        <Route exact path="/service" component={Service}></Route>
//        <Route exact path="/store" component={Store}></Route>
//        <Route   path="/about" component={About}></Route>
//        <Route   path="/contact" component={Contact}></Route>
//        <Route exact path="/account" component={Account}></Route>
//      </Switch>
//  </Navbar> */}
//  </div> 
//  </div>


//            <div className="upperimg">
// 		   <h1 className="head">CONTACT PAGE</h1>
// 		   <img src="./images/concar.jpg"alt="asgfsdg" >
// 		   </img>
// 		   </div>
//         <marquee>   <h1 className="work">CHOOSE WORKSHOP OF YOUR CHOICE</h1></marquee>
//    <div className="divmainone" >
//     <h1 className="headinggg">WORKSHOPS</h1>
  
//     <div className="div1">
//     <div className="div2">  <img src="./images/sc1.jpeg"alt="asgfsdg" >
// 		   </img>
//            <h3>Raju Service Center</h3>
//            <p>Near AB road</p>
//            <p>47 reviews</p>
//            <div className="aa"><a href="www.google.com">GO TO SERVICES</a></div>
//            </div>
//     <div className="div2">  <img src="./images/sc2.jpg"alt="asgfsdg" >
// 		   </img>
//            <h3>Vehicle Point</h3>
//            <p>Civil Lines</p>
//            <p>32 reviews</p>
//            <div className="aa"><a href="www.google.com">GO TO SERVICES</a></div>
//            </div>
//     <div className="div2">  <img src="./images/sc3.jpg"alt="asgfsdg" >
// 		   </img>
//            <h3>Rehaan Auto Parts</h3>
//            <p>Ramnagar</p>
//            <p>29 reviews</p>
//            <div className="aa"><a href="www.google.com">GO TO SERVICES</a></div>
//            </div>
//     </div>

//     <div className="div1">
//     <div className="div2">  <img src="./images/sc4.jpg"alt="asgfsdg" >
// 		   </img>  <h3>Ram Auto Services</h3>
//            <p>Rasalpur </p>
//            <p>42 reviews</p>
//            <div className="aa"><a href="www.google.com">GO TO SERVICES</a></div>
//            </div>
//     <div className="div2">  <img src="./images/sc5.jpg"alt="asgfsdg" >
// 		   </img>
//            <h3>A1 auto Center</h3>
//            <p>Vikas nagar Square</p>
//            <p>20 reviews</p>
//            <div className="aa"><a href="www.google.com">GO TO SERVICES</a></div>
//            </div>
//     <div className="div2">  <img src="./images/sc6.jpg"alt="asgfsdg" >
// 		   </img>
//            <h3>Auto World</h3>
//            <p>Keladevi Road</p>
//            <p>58 reviews</p>
//            <div className="aa"><a href="www.google.com">GO TO SERVICES</a></div>
//            </div>
//     </div>
 
// </div>

//    <div>

// <div className="footer">

// <div className="about">
// <h3>ABOUT US</h3>
// <img src="./images/logo.jpg"></img>
// <p>TRACKIFY stands for Quality and Class.<br></br> 
// Need any assistance with your vehicle, <br></br>
// allow us to quickly identify and solve the problem.<br></br>
// With our hassle free services, we aim <br></br>
// to be your one window solution provider.</p>
// </div>

// <div className="about">
// <h3>WORKING HOURS</h3>
// <p>Our mechanics work everyday,<br></br>
// while our customer support team <br></br>
// rests on weekends and major holidays. <br></br>
// You can connect with us through Hotline <br></br>
// and Contact form.<br></br>
// <br></br>
// Days: Monday - Sunday  <br></br>Time:07:00hrs. - 22:00hrs.</p>
// </div>
// <div className="about">
// <h3>SERVICES</h3>

// {/* <ul> 
// <li><NavLink exact to="/" className="fsnav" activeClassName="menu_Link">Accidental Help</NavLink></li> 
// <li><NavLink exact to="/Service" className="fsnav" activeClassName="menu_Link">Spare wheels</NavLink></li> 
// <li> <NavLink exact to="/store" className="fsnav" activeClassName="menu_Link">Car wash</NavLink></li> 
// <li> <NavLink exact to="/Contact" className="fsnav" activeClassName="menu_Link">Emergency repair</NavLink></li> 
// <li> <NavLink exact to="/Contact" className="fsnav" activeClassName="menu_Link">Other Services</NavLink></li>       
// </ul> */}
// </div>
// <div className="about">
// <h3>EXTRA</h3>
// {/* <ul> 
// <li><NavLink exact to="/" className="fsnav" activeClassName="menu_Link">Accidental Help</NavLink></li> 
// <li><NavLink exact to="/Service" className="fsnav" activeClassName="menu_Link">Spare wheels</NavLink></li> 
// <li> <NavLink exact to="/store" className="fsnav" activeClassName="menu_Link">Car wash</NavLink></li> 
// <li> <NavLink exact to="/Contact" className="fsnav" activeClassName="menu_Link">Emergency repair</NavLink></li> 
// <li> <NavLink exact to="/Contact" className="fsnav" activeClassName="menu_Link">Other Services</NavLink></li>       
// </ul>   */}
// </div>

// </div>
// </div>

// <div className="last">

// <div className="text"><p>Copyright © 2021 - TRACKIFY Inc. - All rights reserved</p></div>


// <div className="chlja">
// {/* <ul className="lastnav"> 
//     <li><NavLink exact to="/about" className="lmenu" activeClassName="menu_Link">About</NavLink></li> 
// <li><NavLink exact to="/Service" className="lmenu" activeClassName="menu_Link">Services</NavLink></li> 
//   <li> <NavLink exact to="/contact" className="lmenu" activeClassName="menu_Link">Contact</NavLink></li> 
//   <li><button exact to ="/header" className="top">top</button></li>
// </ul></div> */}
// </div>

//             </div>
        )
    }
}