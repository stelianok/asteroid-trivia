import React, { useState, useEffect, useCallback } from "react";

import { CalculateSpeed, CalculateWidth } from "../../utils/CalculateTrivia";
import { animalsSpeed, animalsWidth } from "../../utils/animals";

import { CardGroup, Item, ListAnimals } from "./styles";

//trivia type must be speed or diameter
export default function AsteroidTriviaCard({
  asteroidData,
  triviaType = "speed",
}) {
  const [asteroid, setAsteroid] = useState();

  const getUsefulAsteroidData = useCallback((asteroid) => {
    const {
      id,
      name,
      estimated_diameter,
      is_potentially_hazardous_asteroid,
      close_approach_data,
      orbital_data,
    } = asteroid;

    const estimated_diameter_min =
      estimated_diameter.kilometers.estimated_diameter_min;
    const estimated_diameter_max =
      estimated_diameter.kilometers.estimated_diameter_max;

    const last_approach_data =
      close_approach_data[close_approach_data.length - 1];

    const miss_distance = last_approach_data.miss_distance;

    const randomFormattedAsteroid = {
      id,
      name,
      average_estimated_diameter:
        ((estimated_diameter_max + estimated_diameter_min) / 2) * 1000,
      is_potentially_hazardous_asteroid,
      relative_velocity:
        last_approach_data.relative_velocity.kilometers_per_hour,
      last_seen: orbital_data.last_observation_date,
      orbiting_body: last_approach_data.orbiting_body,
      miss_distance: {
        astronomical: miss_distance.astronomical,
        lunar: miss_distance.lunar,
        kilometers: miss_distance.kilometers,
      },
    };

    console.warn(`Selected trivia asteroid ${randomFormattedAsteroid.name}`);

  }, []);

  const getRandomAsteroid = useCallback((asteroids) => {
    const asteroidArraySize = asteroids.length - 1;

    let randomIndex = GetRandomIntfromInterval(0, asteroidArraySize);

    console.warn(`Selected trivia asteroid ${asteroids[randomIndex].name}`);
    setAsteroid(GetUsefulAsteroidData(asteroids[randomIndex]));

    setAsteroid(randomFormattedAsteroid);
  }, []);

  useEffect(() => {
    getUsefulAsteroidData(asteroidData);
  }, []);

  return (
    <CardGroup id='asteroid-trivia-card-component'>
      {triviaType == "speed" ? (
        <>
          <h2>Speed Comparison</h2>
          <ListAnimals>
            {asteroid &&
              animalsSpeed.map(({ speed, name, icon }) => (
                <Item key={name} emote={icon}>
                  <span id={`speed-trivia-${name}`}>
                    {CalculateSpeed(asteroid.relative_velocity, speed)}
                  </span>
                  {" times faster than an "}
                  <strong id={`animal-trivia-${name}`}>{name}</strong>
                </Item>
              ))}
          </ListAnimals>
        </>
      ) : (
        <>
          <h2>The asteroid diameter is equal to: </h2>
          <ListAnimals>
            {asteroid &&
              animalsWidth.map(({ name, width, icon }) => (
                <Item key={name} emote={icon}>
                  <span id={`width-trivia-${name}`}>
                    {CalculateWidth(asteroid.average_estimated_diameter, width)}
                  </span>
                  {" times the diameter of a "}
                  <strong id={`animal-trivia-${name}`}>{name}</strong>
                </Item>
              ))}
          </ListAnimals>
        </>
      )}
    </CardGroup>
  );
}
