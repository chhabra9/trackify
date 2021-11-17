import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Sliderhome2.css";
import "./Slide.css";
export default class Slidehome2 extends React.Component{
	render()
	{
		return(
 
		<div>
            <Carousel className="main-slideHome">
                <div className="main-slideHome">
                <h1 className="visionh1">TRACKIFY VISION</h1>
<h3 className="visionh3">To simplify vehicle maintenance process and provide peace of mind to 
customers through continuous
 improvement in services that create a long-term relationship between us.</h3>
                <img src="./images/slide32.jpg"alt="asgfsdg"  height="600px"width="400px"/>
                </div>

                <div>
               <h1 className="visionh1">WE ARE ALWAYS HERE FOR YOU..</h1>
<h3 className='visionh3'>Every automobile brand is covered
<br></br>
Attractive Prices</h3>
                <img src="./images/car4.jpg"alt="asgfsdg"  height="600px"width="400px"/>
                </div>

                <div>
             
                <h1 className="visionh1">WHY TRACKIFY ?</h1>
                    <h3 className="visionh3">BEST IN CLASS SERVICE<br></br>
FAST AND EASY REPAIR<br></br>
CUSTOMER FRIENDLY MECHANICS</h3>
                <img src="./images/sc6.jpg"alt="asgfsdg" height="600px"width="400px"/>
                </div>

                <div>
              <h1 className="visionh1">  SERVICES OFFERED</h1>
  <h3 className="visionh3">
      REGULAR MAINTENANCE<br></br>
      TAXI/RENTAL<br></br>
    ACCIDENTAL SERVICES</h3>
                <img src="./images/slide31.jpg"alt="asgfsdg"  height="600px"width="400px"/>
               
                </div>
                
            </Carousel>
            </div>
			
			
		)
	} 
}