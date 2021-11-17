import React from 'react';
import './Service.css';
import {Switch,Route}from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';


import Trail from './Regularservice';

import './Slide.css';
import './About.css';
import Home  from './Home';
import About from './Aboutus';
import Contact from './Contact';
import Store from './Store';
import './App.css';
import Account from './Account';
import Footer from '../store/Components/Footer';
import { Divider } from '@material-ui/core';




export default class Service extends React.Component{
	render()
	{
		return(
			<div>
                  
        <div>    
                <img src="./images/about.jpg"alt="asgfsdg" height="600px"width="400px"className="sahi"/>
           </div>


		<div className="mainservicediv">
           
<h1>SERVICES</h1>

             <div>


          <div className="servicediv">
	
                  <div className="andardiv"> 
				  <div className='Sahime'>
				  <img src="./images/breakdown1.jpg"alt="asgfsdg" height="600px"width="400px"className="sahi"/>
				  </div>
				  <div className="contentdiv">
					  <h2><NavLink activeClassName="active" to="/service/reqService">EMERGENCY BREKDOWN</NavLink></h2>
					  <p>If you are stuck on a road with brokedown vehicle, we will be there with all you need to 
						  get moving. Battery Jump-start, Puncture Repair, Toeing Facility, Spare Wheel, Cabs,
						   Accommodation, etc. shall be made available with just one click.</p>
					  </div>
					  </div> 
			
				   
				  <div className="andardiv">
				  <div className='Sahime'>
				  <img src="./images/ac.jpg"alt="asgfsdg" height="600px"width="400px"className="sahi"/>
				  </div>
				 <div className="contentdiv">
				 <h2> < NavLink to="/service/reqService"> ACCIDENTAL HELP </NavLink></h2>
				  <p>We do not want you to meet with an accident, 
					  but in case you do, we will provide Ambulance Service to your nearest Hospital, 
					  Toeing Service to your vehicle and take utmost care of yours.</p>
					  
					  <h4>7489784148 , 7620045804</h4>
				  </div>
				  </div>
	      </div>

		  <div className="servicediv">
                  <div className="andardiv">
				  <div className='Sahime'>
					   <img src="./images/sparepartsservice.jpg"alt="asgfsdg" height="600px"width="400px"className="sahi"/>
					</div>
				  <div className="contentdiv">
					 
					  <h2><NavLink to ="/store">SPARE PARTS</NavLink></h2>
					  <p >We provide spare parts of all the top brands in the country. 
						  Genuine spare parts come with Trakify warranty which provide complete peace of mind.</p>
					  </div>
				  </div>
				  <div className="andardiv"> 
				  <div className='Sahime'>
					   <img src="./images/sparepartsservice.jpg"alt="asgfsdg" height="600px"width="400px"className="sahi"/>
					</div>
				  <div className="contentdiv">

				  <h2><NavLink to ="/store">Accesories</NavLink></h2>
					  <p>With all the genuine accessories, you can add to your 
						  comfort and give your vehicle a classy look. 
						  All TRACKIFY accessories come with warranty and 
						  keeps you stress free.</p>
					  </div>
				  </div>
	      </div>

		  <div className="servicediv">
                  <div className="andardiv"> 
				  <div className='Sahime'>
				  <img src="./images/regularservice.jpg"alt="asgfsdg" height="600px"width="400px"className="sahi"/>
				  </div>
				  <div className="contentdiv">
				  <h2><NavLink to ="/service/reqService">Regular Service</NavLink></h2>
				  <p>
					
					   . Our doorstep pick-up and drop facility eases your tension to get your vehcle repair.
					
						<br></br> <b> Regular services</b> majorly includes -
            
						Wheel Alignment ,  
                            
                          Spare Parts and Accessories , 
                         Wash , 
                        Puncture , 
                         full Checkup , 
                          
                         Fluids , 
                        Transmission , 
                        
                        Lights , 
                        Denting-Painting , 
                          Radiator , 
                       Battery ,

                  </p>
				   </div>
				  </div>
				  <div className="andardiv"> 
				  <div className='Sahime'>
				  <img src="./images/carwash1.jpg"alt="asgfsdg" height="600px"width="400px"className="sahi"/>
				  </div>
				  <div className="contentdiv">
				  <h2><NavLink activeClassName="active" to="/service/reqService">Car wash</NavLink></h2>
				  <p>You spend a lot of time in your car, therefore it should be clean and hygienic.
					   TRACKIFY provides car wash service at your preferred location.
					   It not only keeps your car clean and hygienic, but also keeps you healthy.</p>
				  </div>
				  </div>
	      </div>
		  	 </div>
            </div>
			<Footer />
 </div>				
		
		)
	} 
}