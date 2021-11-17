import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Sliderabout.css";
export default class Slidehome2 extends React.Component{
	render()
	{
		return(
    
		<div>
            <Carousel className="main-slideHomes">
                <div className="main-slideHomes">
          
                <h1 className="headh_1">LEADERSHIP</h1>
                <img src="./images/about1.jpg"alt="asgfsdg" height="600px"width="400px"/>
                </div>


                <div>
                <h1 className="headh_1">PERFORMANCE</h1>
                <img src="./images/about2.jpg"alt="asgfsdg"  height="600px"width="400px"/>
                </div>

                <div>
              
                <h1 className="headh_1">RELATIONSHIPS</h1>
                <img src="./images/about3.jpg"alt="asgfsdg"  height="600px"width="400px"/>
                </div>

                <div>
              
                <h1 className="headh_1">COMFORTNESS</h1>
                <img src="./images/about4.jpg"alt="asgfsdg"  height="600px"width="400px"/>
               
                </div>
                
            </Carousel>
            </div>
			
			
		)
	} 
}