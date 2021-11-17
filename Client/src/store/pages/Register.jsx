import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../Responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
const Container = styled.div`

  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/brandon-paul.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Error=styled.span`
color:red`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const {isFetching,error}=useSelector((state)=>state.user);
  const dispatch=useDispatch();
  const handleClick=async(e)=>{
    e.preventDefault();
    await register(dispatch,{username,email,password});
    window.location.href = '/';
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Username"  type="text" onChange={(e)=>setUsername(e.target.value)} />
          <Input placeholder="E-mail ID" type="email" onChange={(e)=>setEmail(e.target.value)} />
          <Input placeholder="Password"  type="password" onChange={(e)=>setPassword(e.target.value)} />
   

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>REGISTER</Button>
          { error && <Error>Something went wrong</Error>}
        </Form>
      </Wrapper>
    </Container>

  );
};

export default Register;