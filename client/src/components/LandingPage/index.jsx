import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";

import API from "../../services/api";

import AsteroidCard from "../AsteroidCard";
import Header from "./Header";

import { Body } from "./styles";

import { Animations } from "../../utils/Animations";

export default function LandingPage() {
  const [asteroids, setAsteroids] = useState(null);

  const AsteroidCardMemoized = memo(
    AsteroidCard,
    (prevProps, nextProps) => prevProps.asteroid.id === nextProps.asteroid.id
  );

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
        {asteroids && (
          <motion.div
            id='asteroid-card-motion'
            whileHover={{ scale: 1.05 }}
            {...Animations.fadeRightIn}
          >
            <AsteroidCardMemoized asteroid={randomAsteroid(asteroids)} />
          </motion.div>
        )}
      </Header>
      <Body></Body>
    </>
  );
}
