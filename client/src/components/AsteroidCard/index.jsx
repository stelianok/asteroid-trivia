import {
  BooleanValue,
  CardContainer,
  CardSection,
  CardSectionGroup,
  CardTitle,
  InformationItem,
} from "./styles";

import Asteroid from "../../assets/img/Asteroid.svg";

import { SpaceIcons } from "../../config/assets";
import Commify from "../../utils/Commify";

const meteor = {
  id: "2000433",
  neo_reference_id: "2000433",
  name: "433 Eros (A898 PA)",
  name_limited: "Eros",
  designation: "433",
  nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2000433",
  absolute_magnitude_h: 10.31,
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: 23.0438466577,
      estimated_diameter_max: 51.5276075896,
    },
    meters: {
      estimated_diameter_min: 23043.8466576534,
      estimated_diameter_max: 51527.6075895943,
    },
    miles: {
      estimated_diameter_min: 14.3187780415,
      estimated_diameter_max: 32.0177610556,
    },
    feet: {
      estimated_diameter_min: 75603.1738682955,
      estimated_diameter_max: 169053.8360842445,
    },
  },
  is_potentially_hazardous_asteroid: false,
  close_approach_data: [
    {
      close_approach_date: "1900-12-27",
      close_approach_date_full: "1900-Dec-27 01:30",
      epoch_date_close_approach: -2177879400000,
      relative_velocity: {
        kilometers_per_second: "5.5786191875",
        kilometers_per_hour: "20083.0290749201",
        miles_per_hour: "12478.8132604691",
      },
      miss_distance: {
        astronomical: "0.3149291693",
        lunar: "122.5074468577",
        kilometers: "47112732.928149391",
        miles: "29274494.7651919558",
      },
      orbiting_body: "Earth",
    },
  ],
};

export default function AsteroidCard() {
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
  } = meteor;

  console.log(SpaceIcons);

  return (
    <CardContainer>
      <CardSection padding='0'>
        <span id='asteroid-id'>#{id}</span>
        <img src={Asteroid} alt='Asteroid' width={250} />
        <label
          htmlFor='orbit-body'
          aria-label='Celestial body that the asteroid is orbiting'
        >
          <img
            src={SpaceIcons[orbiting_body]?.image}
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
                  <span>{Number(Commify(astronomical)).toPrecision(4)} ua</span>
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
                  alt='Distance units in kilometers '
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
    </CardContainer>
  );
}
