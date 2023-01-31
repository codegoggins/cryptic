import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   height: 5rem;
   background-color: hsl(240, 5%, 8%);
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: white;
   padding: 1rem;
`;

const Left = styled.div`

`;

const Center = styled.div`
display: flex;
align-items: center;
gap: 3rem;
`;

const Logo = styled.h1`
`;

const Right = styled.div`

`;

const Item = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.03rem;
  color: hsl(222, 100%, 61%);
  &:hover{
    color: white;
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


const Navbar = () => {
  return (
      <Container>
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
            <Button>Wallet</Button>
         </Right>
      </Container>
  )
}

export default Navbar