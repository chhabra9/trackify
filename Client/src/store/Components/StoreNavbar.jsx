import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React,{useEffect} from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
// import NavBar from "../../MainPage/Navbar";
import Store from "../Store";
import Home from "../../MainPage/MainPage";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
 NavLink as Link
}from "react-router-dom";
import { logout } from "../redux/userRedux";
import { logoutCart } from "../redux/cartRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const user=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser===null?
  false:true;
  const quantity=useSelector(state=>state.cart.quantity);
  console.log(quantity);
  const dispatch=useDispatch();
  
  const handleClick=()=>{
    console.log("hello");
    dispatch(logout());
    dispatch(logoutCart());
    window.location.href = '/';
  }
 
  
  return (
 
    <Container>
    
      <Wrapper>
        <Left>
          {/* <Language>ENGLISH</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Left>
        <Center>
          <Logo>TRACKIFY</Logo>
        </Center>
        <Right>
          {
         !user&& (<Link to={"/register"}>
          <MenuItem>REGISTER</MenuItem>
          </Link>)
}
       {!user&&(<Link to={"/login"}><MenuItem>SIGN IN</MenuItem></Link> )}
       {user&&( <MenuItem onClick={handleClick} >Logout</MenuItem>)}
         

        <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;