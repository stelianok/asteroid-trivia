import React, { useState, useEffect, useCallback } from "react";

import { CalculateSpeed, CalculateWidth } from "../../utils/CalculateTrivia";
import { animalsSpeed, animalsWidth } from "../../utils/animals";

import { Container } from "./styles";
import GetRandomIntfromInterval from "../../utils/GetRandomIntFromInterval";

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

    setAsteroid(randomFormattedAsteroid);
  }, []);

  useEffect(() => {
    getUsefulAsteroidData(asteroidData);
  }, []);

  return (
    <Container>
      {triviaType == "speed" ? (
        <>
          <strong>Speed Comparison</strong>
          <ul>
            {asteroid &&
              animalsSpeed.map((animal) => (
                <li key={animal.name}>
                  {`${animal.icon} ${CalculateSpeed(
                    asteroid.relative_velocity,
                    animal.speed
                  )} times faster than an ${animal.name}`}
                </li>
              ))}
          </ul>
        </>
      ) : (
        <>
          <strong>The asteroid diameter is equal to: </strong>
          <ul>
            {asteroid &&
              animalsWidth.map((animal) => (
                <li key={animal.name}>
                  {`${animal.icon} ${CalculateWidth(
                    parseFloat(asteroid.average_estimated_diameter),
                    animal.width
                  )} ${animal.name} aligned`}
                </li>
              ))}
          </ul>
        </>
      )}
    </Container>
  );
}
