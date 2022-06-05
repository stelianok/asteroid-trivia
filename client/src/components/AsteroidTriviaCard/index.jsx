import React, {useState, useEffect, useCallback} from "react";
import {CalculateSpeed, CalculateWidth} from "./utils/CalculateTrivia";

import { Container } from "./styles";

export default function AsteroidTriviaCard() {

  const animalsSpeed = [
    {
      "name": "Bald Eagle",
      "icon": "🦅",
      "speed": 160
    },
    {
      "name": "Snail",
      "icon": "🐌",
      "speed": 0.05
    }
  ];
  
  const animalsWidth = [
    {
      "name": "Blue Whale",
      "icon": "🐋",
      "width": 24
    },
    {
      "name": "Ant",
      "icon": "🐜",
      "speed": 0.072
    }
  ];

  const [asteroid, setAsteroid] = useState();

  const getRandomAsteroid = useCallback((asteroids) => {
    const meteorArraySize = asteroids.length - 1;
  
    console.warn(`tamanho array: ${meteorArraySize}`);

    let random = Math.floor(Math.random() * meteorArraySize + 1);
    
    const {
      id, 
      name, 
      estimated_diameter, 
      is_potentially_hazardous_asteroid,
      close_approach_data,
      orbital_data,

    } = asteroids[random];

    const estimated_diameter_min = estimated_diameter.kilometers.estimated_diameter_min;
    const estimated_diameter_max = estimated_diameter.kilometers.estimated_diameter_max;
    
    const formattedAsteroid = {
      id,
      name,
      average_estimated_diameter: (estimated_diameter_max+ estimated_diameter_min)/2,
      is_potentially_hazardous_asteroid,
      first_seen: orbital_data.first_observation_date,
    }
    console.warn(random);

    setAsteroid(formattedAsteroid);

  }, []);

  return (
    <Container>
      <strong>Asteroid mano </strong>
    </Container>
    
  )
}