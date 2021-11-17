import React from 'react';
import NavBar from './Navbar';
import StoreComp from "../store/Store";

import{
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
  }from "react-router-dom";
import { FormatBoldRounded, ImportantDevices } from '@material-ui/icons';

export default class Store extends React.Component{
	render()
	{
		return(
			<StoreComp></StoreComp>
		);
	} 
}
