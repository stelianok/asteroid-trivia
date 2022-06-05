import { useState, useEffect } from "react";

import AsteroidCard from "../AsteroidCard";
import API from "../../services/api";

import { Header, HeaderBody, Body } from "./styles";
import GetRandomIntfromInterval from "../../utils/GetRandomIntFromInterval";

export default function LandingPage() {
  const [asteroids, setAsteroids] = useState(null);

  const randomAsteroid = (asteroids) =>
    asteroids[Math.floor(Math.random() * asteroids.length)];

  useEffect(() => {
    async function fetchData() {
      await API.get("/neo/browse/",
        {
          params: {
            page: GetRandomIntfromInterval(1, 1469)
          }
        })
        .then(({ data }) => {
          console.log(data.near_earth_objects[0].name)
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
