import { useState, useEffect } from "react";

import AsteroidCard from "../AsteroidCard";
import API from "../../services/api";

import { Header, HeaderBody, Body } from "./styles";

export default function LandingPage() {
  const [asteroids, setAsteroids] = useState(null);

  const randomAsteroid = (asteroids) =>
    asteroids[Math.floor(Math.random() * asteroids.length)];

  useEffect(() => {
    async function fetchData() {
      await API.get("/neo/browse/")
        .then(({ data }) => {
          setAsteroids(data.near_earth_objects);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    fetchData();
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
