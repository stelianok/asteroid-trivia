import { calculateSpeed, calculateWidth } from "../../utils";
import { animalsSpeed, animalsWidth } from "../../config/animals";

import { CardGroup, ListAnimals, Item } from "./styles";

export default function AsteroidTriviaCard({ asteroid, triviaType = "speed" }) {
  const { relativeVelocity, averageEstimatedDiameter } = asteroid;

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
                    {calculateSpeed(relativeVelocity, speed)}
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
                    {calculateWidth(averageEstimatedDiameter, width)}
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
