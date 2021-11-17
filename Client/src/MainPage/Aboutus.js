 import React from 'react';
 import Slide from './Slide';
 import './Slide.css';
 import './About.css';
 import Home  from './Home';
 import Service from './Service';
 import {Switch,Route}from "react-router-dom";
 import Contact from './Contact';
 import Store from './Store';
 import './App.css';
 import Account from './Account';
 import { NavLink } from 'react-router-dom';
 import Navbar from './Navbar';
 import Sliderabout from './Sliderabout';
import Footer from '../store/Components/Footer';

 
export default class About extends React.Component{
	render()
	{
		return(
		<div>
 
      

          <div className="maain">      
                <img src="./images/about.jpg"alt="asgfsdg" height="600px"width="400px"className="sahi"/>
                <h1 className="h11">TRACKIFY</h1>
          <h2 className="h22">Running On The Roads Of Trust</h2> </div>

           
            <div className="maindiv">

                <div className="write">
                <h1>  TRACKIFY VISION</h1>
                <p>"To simplify vehicle repair & maintenance process and provide complete
                     peace of mind to customers through continuous improvement in services
                      that creates a long-term relationship between us."<br></br>
     <br></br>
Incorporated in the year 2021, TRACKIFY thrives on its vision 
of providing the best services to customers through 
skilled mechanics. We don't believe in short-term gains,
 but in long-term relationship with our customers. 
 With an ever growing team size and workshop partners, 
 we intend to service each customer with utmost
  dedication so that they choose to stay with us forever.
<br></br><br></br>
You think of quick and easy repairs, you think of mechontrack.com</p>
                </div>


                <div className="ps">
                <Sliderabout></Sliderabout>
                </div>
              
            </div>            
    

        



<div><h3 className="founder">FOUNDERS</h3></div>

<div className="founddiv">	



  <div className="imageediv"> 
  <img src="./images/aadarsh.jpg"alt="asgfsdg" >
 </img>
 <h3>Aadarsh Songara</h3>
 <h4>aadarshsongara51@gmail.com</h4>
</div>

  <div className="imageediv">
  <img src="./images/mohan.jpg"alt="asgfsdg" >
 </img>
 <h3>Mohanish Nayak </h3>
 <h4>mohanishnayakit19@acropolis.in</h4>
  </div>

</div>


<div className="founddiv">	

<div className="imageediv">
  <img src="./images/achint.jpg"alt="asgfsdg" >
 </img>
 <h3>Achint Singh Chhabra</h3> 
 <h4>achintsinghit19@acropolis.in</h4>
  </div>

  
<div className="imageediv">
  <img src="./images/ani.jpg"alt="asgfsdg" >
 </img>
 <h3>Aniruddha Tiwari</h3> 
 <h4>aniruddhatiwariit19@acropolis.in</h4>
  </div>

  </div>
<Footer />
        </div>
			
			
		)
	} 
}