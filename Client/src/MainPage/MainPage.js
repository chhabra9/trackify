import React from 'react';
import Carwash from './Carwash';

import About from './Aboutus';
import Homes from './Homes';
import Slide from './Slide';
import Contact from './Contact';
import Service from './Service';
import Fastag from './Fastag';
import Emergency from './Emergency';
import Sparewheels from './Sparewheels';
import Schedule from './Schedule';
import Trail from './Regularservice';
import Store from "./Store";
import Navbar from './Navbar';
import styled from "styled-components";
import { mobile } from "../Responsive";
import StoreNavBar from '../store/Components/StoreNavbar';
import Announcement from '../store/Components/Announcement';
import{
  Switch,
  Route
} from "react-router-dom";
// import Navbar from '../store/Components/Navbar';

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

function App() {
  return (
    <div>
      
            <Navbar></Navbar>
    </div>




  );
}

export default App;
