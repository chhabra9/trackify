import {
    Facebook,
    Instagram,
    LinkedIn,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../Responsive";
  import {Link} from "react-router-dom"
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;

  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  const Anchor= styled.a`
  background-color:"0e76a8"
  
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    const linkdinUrl="https://www.linkedin.com/in/achint-singh-a2b6851a9";
    const twitterUrl="https://twitter.com/SardarjiMr";
    return (
      <Container>
        <Left>
          <Logo>TRACKIFY</Logo>
          <Desc>
          We ARE ALWAYS JUST ONE-CLICK AWAY!            
          ALWAYS THERE TO HELP YOU 24/7!
          </Desc>
          <SocialContainer>
          <Anchor href={linkdinUrl}>
            <SocialIcon color="0e76a8">
            
              <LinkedIn />
            </SocialIcon>
            </Anchor>
            <Anchor href={twitterUrl}>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            </Anchor>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <Anchor href={twitterUrl}>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            </Anchor>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem><Link to={"/"}>Home </Link></ListItem>
            <ListItem><Link to={"/cart"}>Cart</Link></ListItem>
            <ListItem><Link to={"/store"}>Store</Link></ListItem>
            <ListItem><Link to={"/about"}>About</Link></ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 26, Prakash Nagar, Navlakha Square, Indore(452001), MP
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> trackifysupport@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;