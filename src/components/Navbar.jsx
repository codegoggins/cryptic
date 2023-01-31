import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {

  const [toggle,setToggle] = useState(false);  

  return (
      <Container>
        <Topbar>
        <Left>
            <Logo>Cryptic</Logo>
         </Left>
         <Center>
            <Item>Home</Item>
            <Item>Markets</Item>
            <Item>Blogs</Item>
            <Item>About</Item>
         </Center>
         <Right>
            <Icon onClick={()=>setToggle(!toggle)}>
                {
                    toggle ? (
                        <CloseIcon fontSize='large'/>
                    ) : (
                        <MenuIcon fontSize='large'/>
                    )
                }
            </Icon>
            <Button>Wallet</Button>
         </Right>
        </Topbar>
         <Sidebar isToggle={toggle}>
            <SideItems>
                <Item>Home</Item>
                <Item>Markets</Item>
                <Item>Blogs</Item>
                <Item>About</Item>
            </SideItems>
         </Sidebar>
      </Container>
  )
}

export default Navbar


const Container = styled.div`
   background-color: hsl(240, 5%, 8%);
   color: white;
`;

const Topbar = styled.div`
   height: 5rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: white;
   padding: 1rem;
   z-index: 3;
`;

const Left = styled.div`
cursor: pointer;
`;

const Center = styled.div`
display: flex;
align-items: center;
gap: 3rem;

    @media(max-width:768px){
        display: none;
    }
`;

const Logo = styled.h1`
`;

const Right = styled.div`
 display: flex;
 align-items: center;
 gap: 0.6rem;
`;

const Item = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.03rem;
  color: white;
  &:hover{
      color: hsl(222, 100%, 61%);
  }
`;

const Button = styled.button`
  color: white;
  border: 1px solid white;
  padding: 0.7rem 1.6rem;
  background: transparent;
  border-radius: 2rem;
  cursor: pointer;
  font-weight:400;
  font-size: 0.9rem;
  letter-spacing: 0.03rem;
  &:hover{
    background-color: hsl(222, 100%, 61%);
    border: none;
  }
`;

const Sidebar = styled.div`
  position: absolute;
  top: -100%;
  height: 100vh;
  width: 100vw;
  background-color: hsl(240, 5%, 8%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  transform: ${(props)=>props.isToggle ? 'translateY(100%)' : 'translateY(0%)'};
  transition: all 0.3s ease;
  z-index: -1;

  @media(min-width:768px){
    display: none;
  }
`;

const SideItems = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
gap: 3rem;
`;

const Icon = styled.div`
  cursor: pointer;
  z-index: 4;
  @media(min-width:768px){
    display: none;
  }
`;