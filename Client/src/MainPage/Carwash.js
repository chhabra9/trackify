import React from 'react';
import './Contact.css';
import './About.css';
import'./Carwash.css';
import './Carwash.css';
import Carwashslider from './Carwashslider';
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


export default class Carwash extends React.Component{
    render()
    {
        return(
        <div>
      

       

  <center>
      <div >
          <h2>CARWASH</h2>
          <p>Our aims to simplify end-to-end vehicle maintenance and bring <br></br>the
               entire sector online and help
               consumers save effort & make <br></br>vehicle maintenance more economical.</p>
         <h4>Workshop</h4>
         <p>TRACKIFY Workshop</p>
         <h4>Package</h4>
         <p>Basic and advance cleaning</p>
         <h4>Location</h4>
         <p>Dewas</p>
         <h4>Charges</h4>
         <p>150+ May varies according to vehicle type</p>
         <h4>Car Type</h4>
         <p>All types</p>
      </div>
      </center>

<div className="dddd" >
    <h1>Book Your Wash</h1>
    <section className="cover" >
        <input type="text" placeholder="Name of honor" className="info"></input>
        <input type="text"placeholder="Mobile"className="info"></input>
        <input type="text"placeholder="Vehicle company"className="info"></input>
        </section>
    <section className="cover">    <input type="text"placeholder="Model"className="info"></input>
        <input type="text"placeholder="Registration Number"className="info"></input>
        <input type="text"placeholder="Address"className="info"></input>
    </section>
    <button className="submit"><a href="www.google.com"/> SUBMIT</button>
</div>


            </div>
        )
    }
}