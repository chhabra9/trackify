import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/StoreNavbar";
import Newsletter from "../Components/Newsletter";
import { mobile } from "../Responsive";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { CircularProgress } from "@material-ui/core";
import { addProduct } from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location=useLocation();
  const id=location.pathname.split("/")[3];
  console.log(id);
  const[product,setProduct]=useState({});
  const [quantity,setQuantity]=useState(1);
  const [color,setColor]=useState("");
  const [carType,setCarType]=useState("");
  const dispatch=useDispatch();

 useEffect(()=>{
   const getProduct=async()=>{
     try{
        const res=await publicRequest.get("/products/find/"+id);
        setProduct(res.data);
        console.log(res.data);
     }catch(err){}
   };
   getProduct();
 },[id]);
 const handleQuantity=(type)=>{
   if(type==="dec"){
    quantity>1 && setQuantity(quantity-1);
   }
    else{
    setQuantity(quantity+1);
    }
    console.log(quantity);
 }
 const handleClick=()=>{
   //update our cart
   dispatch(addProduct({...product,quantity,color,carType}));
   
 }
 const user=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser===null?
  false:true;
  return (
    <Container>
    
      <Wrapper>
        <ImgContainer>
          <Image src={product.img}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>Rs.{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {/* {product.color.map((c)=>(
                <FilterColor color={c} key={c} /> */}
                    {product.color?.map((s)=>(
                    <FilterColor color={s} key={s} onClick={()=>setColor(s)}></FilterColor>
                ))}
            
            </Filter>
            <Filter>
              <FilterTitle>Suitable for </FilterTitle>
              <FilterSize onChange={(e)=>setCarType(e.target.value)}>
                {product.carType?.map((val)=>(
                    <FilterSizeOption key={val}>{val}</FilterSizeOption>
                ))}
              
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              {user &&(<Remove onClick={()=>handleQuantity("dec")} />)}
              {user&&(<Amount>{quantity}</Amount>)}
              {user&&(<Add  onClick={()=>handleQuantity("inc")}/>)}
            </AmountContainer>
            {user && (<Button  onClick={handleClick}>ADD TO CART</Button>)}
            {!user &&(<Link to={"/login"}><Button onClick>Login First </Button></Link>)}
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;