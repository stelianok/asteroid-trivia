import { useContext } from "react";
import { MediaQuery } from "@mantine/core";

import { AsteroidContext } from "../../contexts/asteroid";
import { SpaceIcons } from "../../config/assets";
import { commify } from "../../utils";

import {
  BooleanValue,
  CardContainer,
  CardGroup,
  CardSection,
  CardSectionGroup,
  CardTitle,
  InformationItem,
  Button,
} from "./styles";

export default function AsteroidCard({ asteroid }) {
  const {
    id,
    name,
    orbitingBody,
    lastSeen,
    relativeVelocity,
    isHazardous,
    missDistance: { astronomicalDistance, lunarDistance, kilometersDistance },
  } = asteroid;

  const { getRandomAsteroidFromAPI } = useContext(AsteroidContext);

  return (
    <CardContainer>
      <CardGroup>
        <MediaQuery
          smallerThan={768}
          styles={{ display: "none", "&>*": { display: "none" } }}
        >
          <CardSection padding='0'>
            <span id='asteroid-id'>#{id}</span>
            <img src={SpaceIcons.Asteroid.image} alt='Asteroid' width={250} />
            <span aria-label='Celestial body that the asteroid is orbiting'>
              <img
                src={
                  SpaceIcons[orbitingBody]?.image ?? SpaceIcons.Default.image
                }
                width={30}
                alt='Celestial body that the asteroid is orbiting'
              />
              <span id='orbit-body'>{` Orbiting body:  ${orbitingBody}`}</span>
            </span>
          </CardSection>
        </MediaQuery>
        <CardSection>
          <div>
            <CardTitle>{name}</CardTitle>
            <MediaQuery largerThan={768} styles={{ display: "none" }}>
              <span id='asteroid-id'>#{id}</span>
            </MediaQuery>
          </div>
          <CardSection>
            <CardSectionGroup>
              <div className='container'>
                <InformationItem>
                  <span className='emoji'>🗓️</span>
                  <div>
                    <h3>Last Seen:</h3>
                    <span>{lastSeen}</span>
                  </div>
                </InformationItem>
                <InformationItem>
                  <span className='emoji'>{isHazardous ? "⚠️" : "✅"}</span>
                  <div>
                    <h3>Is hazardous:</h3>
                    <BooleanValue value={isHazardous === "Yes" ? true : false}>
                      {isHazardous ? "Yes :(" : "No :)"}
                    </BooleanValue>
                  </div>
                </InformationItem>
                <InformationItem>
                  <span className='emoji'>⏱️</span>
                  <div>
                    <h3>Relative Velocity:</h3>
                    <span>{Number(relativeVelocity).toPrecision(4)} km/h</span>
                  </div>
                </InformationItem>
              </div>
            </CardSectionGroup>
            <CardSectionGroup>
              <div className='container'>
                <h3>Missed distance:</h3>
                <InformationItem>
                  <img
                    src={SpaceIcons["Sun"]?.image}
                    width={40}
                    alt='Is Danger?'
                  />
                  <div>
                    <h3>Astronomical:</h3>
                    <span>
                      {Number(commify(astronomicalDistance)).toPrecision(4)} ua
                    </span>
                  </div>
                </InformationItem>
                <InformationItem>
                  <img
                    src={SpaceIcons["Moon"]?.image}
                    width={40}
                    alt='Is Danger?'
                  />
                  <div>
                    <h3>lunar:</h3>
                    <span>
                      {Number(commify(lunarDistance)).toPrecision(4)} una
                    </span>
                  </div>
                </InformationItem>
                <InformationItem>
                  <img
                    src={SpaceIcons["Earth"]?.image}
                    width={40}
                    alt='Distance units in kilometers'
                  />
                  <div>
                    <h3>kilometers:</h3>
                    <span>
                      {commify(Number(kilometersDistance).toPrecision(4))} km
                    </span>
                  </div>
                </InformationItem>
              </div>
            </CardSectionGroup>
          </CardSection>
        </CardSection>
      </CardGroup>
      <Button
        color='#661d78'
        py={15}
        onClick={() => getRandomAsteroidFromAPI()}
      >
        Check another asteroid
      </Button>
    </CardContainer>
  );
}
