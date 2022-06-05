import AsteroidCard from "../AsteroidCard";

import {
  Header,
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
