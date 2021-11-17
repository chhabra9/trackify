import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Sliderhome2.css";
export default class Slidehome2 extends React.Component{
	render()
	{
		return(
		<div>
            <Carousel className="main-slideHomes">
                <div className="main-slideHomes">
    
                <h1 className="sustainh1">WE BELIEVE SUSTAINABILITY</h1>
                <h3 className="sustainh3">We will deal with your failure that determines how you achieve success."</h3>
                <img src="./images/sh4.png"alt="asgfsdg"  height="600px" width="400px"/>
                
                </div>

               


                <div>
                <h1 className="sustainh1">TRANSPORT SERVICES</h1>
                    <h3 className="sustainh3" >"VEHICLES ARE ONE OF THE BEST MODES OF TRANSPORTATION"</h3>
                <img src="./images/car5.jpg"alt="asgfsdg" height="600px"width="400px"/>
                </div>

                <div>
                <h1 className="sustainh1">WORLD CLASS SERVICE</h1>
                <h3 className="sustainh3">"WHEN SERVICE MATTERS YOUR CHOICE IS SIMPLE"</h3>
                <img src="./images/sh3.png"alt="asgfsdg"  height="600px"width="400px"/>
                </div>

                <div>
                <h1 className="sustainh1">"MANY MORE THINGS FOR YOU "</h1>
                <h3  className="sustainh3">Stay connected and build a better world</h3>
                <img src="./images/fer.jpg"alt="asgfsdg"  height="600px"width="400px"/>
               
                </div>
                
            </Carousel>
            </div>
			
			
		)
	} 
}