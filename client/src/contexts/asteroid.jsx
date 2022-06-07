import { useState, useEffect, createContext } from "react";

import API from "../services/api";
import { formatAsteroid, getRandomIntfromInterval } from "../utils";

export const AsteroidContext = createContext();

export const AsteroidProvider = ({ children }) => {
  const [selectedAsteroid, selectAsteroid] = useState(undefined);

  const selectRandom = (asteroids) =>
    asteroids[getRandomIntfromInterval(0, asteroids.length - 1)];

  const getRandomAsteroidFromAPI = () => {
    API.get("/neo/browse/", {
      params: {
        page: getRandomIntfromInterval(1, 1469),
      },
    })
      .then(({ data: { near_earth_objects: asteroids } }) => {
        selectAsteroid(formatAsteroid(selectRandom(asteroids)));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getRandomAsteroidFromAPI();
  }, []);

  return (
    <AsteroidContext.Provider
      value={{ selectedAsteroid, getRandomAsteroidFromAPI }}
    >
      {children}
    </AsteroidContext.Provider>
  );
};
