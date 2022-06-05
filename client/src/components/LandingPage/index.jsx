import { useState, useEffect } from "react";

import AsteroidCard from "../AsteroidCard";
import axios from "axios";

import { Header, HeaderBody, Body } from "./styles";

const baseURL = `https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

export default function LandingPage() {
  const [asteroids, setAsteroids] = useState(null);

  const randomAsteroid = (asteroids) =>
    asteroids[Math.floor(Math.random() * asteroids.length)];

  useEffect(() => {
    axios.get(baseURL).then(({ data }) => {
      setAsteroids(data.near_earth_objects);
    });
  }, []);

  return (
    <>
      <Header>
        <HeaderBody>
          {asteroids && (
            <AsteroidCard
              id='asteroid-card'
              asteroid={randomAsteroid(asteroids)}
            />
          )}
        </HeaderBody>
      </Header>
      <Body></Body>
    </>
  );
}
