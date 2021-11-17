import React from 'react';
import Navbar from './Navbar';
import {Switch,Route}from "react-router-dom";
import Slide from './Slide';

import './Navbar.css';
import Service from './Service';
import Contact from './Contact';
import Store from './Store';
import { NavLink } from 'react-router-dom';
import About from './Aboutus';
import './Homes.css';
import Sliderhome2 from './Sliderhome2';
import styled from "styled-components";
import Sliderhome3 from './Sliderhome3';
import Footer from '../store/Components/Footer';

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export default class Homes extends React.Component{
	render()
	{
		return(
	<div>
<div>
 <Slide></Slide>
 </div>



 <div  className="Services">
  <h1 >SERVICES</h1>
<Center>
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
</Center>
 </div>



 <div className="slider2">
     <Sliderhome2></Sliderhome2>
 </div>


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
 <Sliderhome3></Sliderhome3> </div>
 
<Footer />


        </div>

        			
		)
	} 
}