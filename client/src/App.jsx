import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCallback } from 'react';

import {CalculateSpeed, CalculateWidth} from "./utils/CalculateTrivia";

import LandingPage from "./components/LandingPage";
import AsteroidCard from "./components/AsteroidCard";

const baseURL =
  "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=XbOL6eVBSgeONZepEUOQhgEODrnISyPUHht7iTsC";

function App() {
  function GetRandomPlanet() {
    console.log("planeta aleatório");
  }


const baseURL = "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=XbOL6eVBSgeONZepEUOQhgEODrnISyPUHht7iTsC";


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

function App() {
  const [meteor, setMeteor] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(baseURL)
        .then(({ data }) => {
          setMeteor(
            data.near_earth_objects[Object.keys(data.near_earth_objects)[0]]
          );
          console.log(data.near_earth_objects[0]);
          GetRandomPlanet();
        })
        .catch((err) => console.error(err));
    };

    fetchData();
  }, []);

  return (
    <div>
      <strong>The {meteor.name} is... </strong>
      {/* <ul>
        {animalsWidth.map((animal) => {
          return(
            <li>{animal.icon} {Calculate} Larger than a {animal.name}</li>
          )
        })}
        <li>{animal.icon} larger than {} </li>
      </ul> */}
    </div>
  );
}

export default App;
