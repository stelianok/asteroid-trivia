import { useMantineTheme } from "@mantine/core";

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

import Asteroid from "../../assets/img/Asteroid.svg";

import { SpaceIcons } from "../../config/assets";
import Commify from "../../utils/Commify";

export default function AsteroidCard({ asteroid }) {
  const theme = useMantineTheme();
  const {
    id,
    name,
    is_potentially_hazardous_asteroid: isHazardous,
    close_approach_data: [
      {
        orbiting_body,
        close_approach_date_full: first_seen,
        relative_velocity: { kilometers_per_hour },
        miss_distance: { astronomical, kilometers, lunar },
      },
    ],
  } = asteroid;

  return (
    <CardContainer>
      <CardGroup>
        <CardSection padding='0'>
          <span id='asteroid-id'>#{id}</span>
          <img src={Asteroid} alt='Asteroid' width={250} />
          <label
            htmlFor='orbit-body'
            aria-label='Celestial body that the asteroid is orbiting'
          >
            <img
              src={SpaceIcons[orbiting_body]?.image ?? SpaceIcons.Default.image}
              width={30}
              alt='Celestial body that the asteroid is orbiting'
            />
            <span id='orbit-body'>{`Orbiting body:  ${orbiting_body}`}</span>
          </label>
        </CardSection>
        <CardSection>
          <CardTitle>{name}</CardTitle>
          <CardSection>
            <CardSectionGroup>
              <div className='container'>
                <InformationItem>
                  <span className='emoji'>🗓️</span>
                  <div>
                    <h3>First Seen:</h3>
                    <span>{first_seen}</span>
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
                    <span>
                      {Number(kilometers_per_hour).toPrecision(4)} km/h
                    </span>
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
                      {Number(Commify(astronomical)).toPrecision(4)} ua
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
                    <span>{Number(Commify(lunar)).toPrecision(4)} una</span>
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
                    <span>{Commify(Number(kilometers).toPrecision(4))} km</span>
                  </div>
                </InformationItem>
              </div>
            </CardSectionGroup>
          </CardSection>
        </CardSection>
      </CardGroup>
      <Button color='#661d78' py={15}>
        Check another asteroid
      </Button>
    </CardContainer>
  );
}
