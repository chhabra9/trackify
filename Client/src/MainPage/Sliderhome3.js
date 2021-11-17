import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Sliderhome2.css";
 import "./Sliderhome3.css";
export default class Slidehome3 extends React.Component{
	render()
	{
		return(
		<div>
            <Carousel className="main-slideHomes">
                <div className="main-slideHomes">
    
                <h1 className="sustainh1">REPAIR WARRANTY OF 15DAYS</h1>
                <img src="./images/sh32.png"alt="asgfsdg"  height="600px" width="400px"/>
                
                </div>

               


                <div>
      
                <h1 className="sustainh1">Quality service to customer</h1>
                   
                <img src="./images/car3.jpg"alt="asgfsdg" height="600px"width="400px"/>
                </div>

                <div>
                <h1 className="sustainh1">REWARDS AND BENEFITS</h1>
                <img src="./images/about2.jpg"alt="asgfsdg"  height="600px"width="400px"/>
                </div>

                <div>
                <h1 className="sustainh1">"MANY MORE THINGS FOR YOU "</h1>
               <h2 className='sustainh3'>Car/Bike wash free after 3 services</h2>
                <img src="./images/car2.jpg"alt="asgfsdg"  height="600px"width="400px"/>
               
                </div>
                
            </Carousel>
            </div>
			
			
		)
	} 
}

// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import "./Sliderhome3.css";
// export default class Slidehome2 extends React.Component{
// 	render()
// 	{
// 		return(
    
// 		<div>
//             <Carousel className="main-slideHome">
//                 <div className="main-slideHome">
//                   <h1 className="peaceh1">Comfort Zone</h1>
                  
// <h2 className="peaceh2">REPAIR WARRANTY OF 15DAYS</h2><br></br>
// <h2 className="peaceh22">SERVICES CAN BE SCHEDULED</h2><br></br>
// <h2 className="peaceh23">PICK-UP AND DROP FACILITY</h2><br></br>
//                 <img src="./images/sh32.png"alt="asgfsdg" height="600px"width="400px"/>
//                 </div>

//                 <div>
//            <h1 className="peaceh1">REWARDS AND BENEFITS</h1>
// <h2 className="peaceh2">20% discount on 5th service</h2>
// <h2 className="peaceh22">Car/Bike wash free after 3 services</h2>

//                 <img src="./images/about2.jpg"alt="asgfsdg"  height="600px"width="400px"/>
//                 </div>

//                 <div>
//               <h1 className="successh1">Keys for succes</h1><br></br>
//               <h2 className="successh2">Quality service to customer</h2><br></br>
           
//               <h2 className="successh22">Comfortness is our moto</h2><br></br>
//                 <img src="./images/car2.jpg"alt="asgfsdg"  height="600px"width="400px"/>
//                 </div>

//                 <div>
//                 <h2 className="beliefh2">Our Beliefs</h2><br></br>
//              <h2 className="beliefh22"> Better user customer relationship</h2><br></br>
//              <h2 className="beliefh23">User friendly environment</h2><br></br>
//              <h2></h2>
              
//                 <img src="./images/car3.jpg"alt="asgfsdg"  height="600px"width="400px"/>
               
//                 </div>
                
//             </Carousel>
//             </div>
			
			
// 		)
// 	} 
// }