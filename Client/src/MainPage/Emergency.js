import React, { useState } from 'react';
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
import Eslide from './Eslide';
import Footer from '../store/Components/Footer';
import { useSelector } from 'react-redux';
import { publicRequest } from '../store/requestMethods';

function ServiceForm(){
  
        const [inputs,setInputs]=useState({

        });
        const [problems,setProblems]=useState([]);

        const handleChange=(e)=>{
            setInputs(prev=>{
              return{...prev,[e.target.name]:e.target.value,problems};
            });
            console.log(inputs);
         };
         const handleProblems=(e)=>{
           setProblems(e.target.value.split(","));
            console.log(problems);
         };
         const handleClick=(e)=>{
          e.preventDefault();
          publicRequest.post("/serviceRequest",inputs);
         }
        return(
           
            // <h1>Hello Emergency</h1>
            <div>
   <div className="dd" >
    <h1>!!!SERVICES!!!</h1>
    <section className="cover" >
        <input type="text" name="ownerName" placeholder="Name of owner" className="info" onChange={handleChange}></input>
        <input type="text" name='mobileNo' placeholder="Mobile Number "className="info" onChange={handleChange}></input>
        <input type="text" name="vechileComp" placeholder="Vehicle company"className="info" onChange={handleChange}></input>
        </section>
       <section className="cover">
           <input type="text" name="model" placeholder="Model"className="info" onChange={handleChange}></input>
        <input type="text" name="location" placeholder="Location"className="info" onChange={handleChange}></input>
        <select name='serviceType' className='info' onChange={handleChange}>
                 <option  defaultValue={"none"}> services</option>
                <option value="emegency service"> Emergency Service</option>
                <option value="general service">General Service</option>
                <option value="accidental help">Accidental Help </option>
                <option value="car wash">car Wash </option>
        </select>
        <input type="text" name="problems" onChange={handleProblems} placeholder="Problem if Any...."className="info"></input>
    </section>
    <button onClick={handleClick} > SUBMIT</button>
</div>

   <div>
   <div className="marh1">
   
   <marquee className="mar" width="100%" direction="ltr" height="100px">
   Life don’t have Reset button. Drive safe! &nbsp; &nbsp; &nbsp; !Speed thrills but kills!
     &nbsp; &nbsp; &nbsp; ! Road safety is a state of mind, accident is an absence of mind !
     &nbsp; &nbsp; &nbsp;
   ! Road safety is a cheaper & effective insurance !
   </marquee>
   </div>
            </div>
            </div>
        )
    
}
export default ServiceForm;