import React from 'react';
import './Contact.css';


import './About.css';
import Home  from './Home';
import Service from './Service';
import {Switch,Route}from "react-router-dom";
import About from './Aboutus';
import Store from './Store';
import './App.css';
import Account from './Account';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../store/Components/Footer';
import "./About.css";
import { useState } from 'react';
import { publicRequest } from '../store/requestMethods';
export default function Contact(){
	const [inputs,setInputs]=useState({name:"",suggestion:""});
	const handleChange=(e)=>{
		setInputs(prev=>{
		  return{...prev,[e.target.name]:e.target.value};
		});
		console.log(inputs);
	 };
	 const  handleClick=async(e)=>{
		e.preventDefault();
		await publicRequest.post("/suggestion",inputs);
		setInputs({name:"",suggestion:""});
	   }
		return(
		<div>
<img src="./images/voolvo.jpg"alt="asgfsdg" height="600px"width="400px"className="sahi"/>

		   <h3 className="heading">FIND US AT</h3>


      <div className="fdiv">	

		
			  <div className="ss"> 
			  <img src="./images/loaction.png"alt="asgfsdg" >
		   </img>
		   <h3>VISIT</h3>
		   <h4>31, Trackify Inc., Dewas, Madhya Pradesh, India PIN: 455001</h4>
			</div>

			  <div className="ss">
			  <img src="./images/mail.png"alt="asgfsdg" >
		   </img>
		   <h3>EMAIL </h3>
		   <h4>trackify@gmail.com</h4>
			  </div>

			  <div className="ss">
			  <img src="./images/call.jpg"alt="asgfsdg" >
		   </img>
		   <h3>CALL</h3> 
		   <h4>(+91)7489784148</h4>
			  </div>

		  </div>
	

	  <div className="maptag">
	  <iframe  className="map" 
	  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7348.45995188886!2d76.04768512287406!3d22.94175602020509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396318250ac87eef%3A0xeb76cb769061a847!2sBalgarh%2C%20Balaji%20Nagar%2C%20Dewas%2C%20Madhya%20Pradesh%20455111!5e0!3m2!1sen!2sin!4v1633415760193!5m2!1sen!2sin" 
	  allowfullscreen="" loading="lazy"></iframe>
	  </div>

<div><h2 className="love">WE LOVE TO HEAR YOU</h2></div>
<div className="contact-form">

	<div className="content">
		<h4>NAME:</h4>
		<input type="text"placeholder="eg:Aadarsh" name='name' value={inputs.name} onChange={handleChange}></input>
	</div>
	{/* <div className="content">
	<h4>EMAIL:</h4>
		<input type="email"placeholder="eg:Aadarsh19@gmail.com"></input>
	</div>
	<div className="content">
	<h4>MOBILE No.:</h4>
		<input type="number"placeholder="eg:1234567890"></input>
	</div> */}
</div>

<div className="msg">
<h4>MESSAGE:</h4>
		<input type="text"placeholder="" name="suggestion" value={inputs.suggestion} onChange={handleChange}></input>
	
		<div className="btn">	<button onClick={handleClick}>SEND MESSAGE</button></div>
</div>
   

<Footer />

		</div>	
			
		)
	
}


