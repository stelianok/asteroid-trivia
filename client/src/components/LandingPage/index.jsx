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
  Body,
} from "./styles";

export default function LandingPage() {
  return (
    <>
      <Header>
        <HeaderBody>
          <AsteroidCard id='asteroid-card' />
        </HeaderBody>
      </Header>
      <Body></Body>
    </>
  );
}
