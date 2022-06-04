import React from "react";

import AsteroidCard from "../AsteroidCard";

import {
  Container,
  Header,
  Menu,
  Logo,
  PageContainer,
  HomeButton,
  FeedButton,
  HeaderBody,
  Body
} from "./styles";

export default function LandingPage(){
  return(
   <Container>
     <Header>
       <Menu>
       <Logo>Assteroid</Logo>
       <PageContainer>
         <HomeButton>Home</HomeButton>
         <FeedButton>Feed</FeedButton>
       </PageContainer>
       </Menu>
       <HeaderBody>
         <AsteroidCard/>
       </HeaderBody>
     </Header>
     <Body>
       
     </Body>
   </Container>
  )
}