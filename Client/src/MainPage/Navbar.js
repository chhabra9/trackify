import React from "react";
import About from "./Aboutus";
import Home  from './Homes';
import Service from './Service';
import Store from "../store/Store";
import './App.css';
import Account from './Account';
import './Navbar.css';
import Cart from "../store/pages/Cart";
import Login from "../store/pages/Login";
import Register from "../store/pages/Register";
import AccidentalService from "./AccidentalService";
import Contact from "./Contact";
import StoreNavBar from "../store/Components/StoreNavbar";
import Announcement from "../store/Components/Announcement";
import Regularservice from "./Regularservice";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    NavLink
  }from "react-router-dom";
import { useSelector } from "react-redux";
import ServiceForm from "./Emergency";
import Carwash from "./Carwash";

  const NavBar=()=>{
    // const user=false;
    // // const user =useSelector((state)=>state.user.currentUser);
    const user=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser===null?
  false:true;
  //console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser);
      return(
      <Router>
          <Announcement></Announcement>
          <StoreNavBar></StoreNavBar>
       <nav className="navbar">
       <NavLink exact to="/" className="menuStyle" activeClassName="menu_Link">Home</NavLink>
       <NavLink exact to="/service" className="menuStyle" activeClassName="menu_Link">Services</NavLink>
       <NavLink exact to="/store" className="menuStyle" activeClassName="menu_Link">Store</NavLink>
       <NavLink exact to="/about" className="menuStyle" activeClassName="menu_Link">About Us</NavLink>
       <NavLink  to="/contact" className="menuStyle" activeClassName="menu_Link">Contact</NavLink>
       </nav>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact  path="/about"> <About /> </Route>
            <Route exact path="/service"> <Service /> </Route>
            <Route exact path="/store"> <Store /> </Route>
            <Route exact path="/contact"><Contact/></Route>
            <Route exact path="/service/reqService"><ServiceForm/></Route>
            <Route exact path="/store/products/:category"><Store /> </Route>
      <Route exact path="/store/product/:id"><Store /></Route>
      <Route exact path="/store/success"><Store /></Route>
      <Route exact  path="/register">
      <Register />
        </Route>
      <Route exact path="/cart"> <Cart/></Route>
          <Route exact path="/login">
        {!user?<Login />:<Redirect to="/" />}
        </Route>
        </Switch>
      </Router>
      
      
      );
  }
  export default NavBar;