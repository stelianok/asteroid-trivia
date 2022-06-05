import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";

<<<<<<< HEAD
=======
import { Body, Container } from "./styles";

>>>>>>> 893d1ad (fix: fixed overflow on project)
import API from "../../services/api";
import GetRandomIntfromInterval from "../../utils/GetRandomIntFromInterval";
import { Animations } from "../../utils/Animations";

import {
  Body,
  Title,
  Desription,
  Container,
  SectionContainer,
  TriviaGroup,
} from "./styles";

import AsteroidCard from "../AsteroidCard";
import Header from "../Layout/Header";
import AsteroidTriviaCard from "../AsteroidTriviaCard";
import ProjectOverview from "../ProjectOverview";

export default function LandingPage({ refs }) {
  const [selectedAsteroid, setSelectedAsteroid] = useState(null);

  const {
    asteroid: { current: asteroidRef },
    trivia: { current: triviaRef },
  } = refs;

  const AsteroidCardMemoized = memo(
    AsteroidCard,
    (prevProps, nextProps) => prevProps.asteroid.id === nextProps.asteroid.id
  );

  const randomAsteroid = (asteroids) =>
    asteroids[GetRandomIntfromInterval(0, asteroids.length - 1)];

  useEffect(() => {
    async function fetchData() {
      await API.get("/neo/browse/", {
        params: {
          page: GetRandomIntfromInterval(1, 1469),
        },
      })
        .then(({ data }) => {
          setSelectedAsteroid(randomAsteroid(data.near_earth_objects));
        })
        .catch((err) => {
          console.error(err);
        });
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Header>
        {selectedAsteroid && (
          <motion.div
            id='asteroid-card-motion'
            whileHover={{ scale: 1.05 }}
            {...Animations.fadeRightIn}
          >
            <AsteroidCardMemoized
              id='asteroid-card-component'
              asteroid={selectedAsteroid}
              ref={asteroidRef}
            />
          </motion.div>
        )}
      </Header>
      <Body>
        <SectionContainer>
          <Title>Trivia Cards</Title>
          <Desription>
            The numbers may seem complicated, but this asteroid is:
          </Desription>
        </SectionContainer>
        <section>
          {selectedAsteroid && (
            <TriviaGroup>
              <motion.div
                initial={{ opacity: 0, y: 300 }}
                whileInView={{
                  opacity: 1,
                  y: 50,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                  },
                }}
                viewport={{ once: true }}
              >
                <AsteroidTriviaCard
                  id='speed-trivia-card-component'
                  asteroidData={selectedAsteroid}
                  triviaType='speed'
                  ref={triviaRef}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 300 }}
                whileInView={{
                  opacity: 1,
                  y: 50,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                  },
                }}
                viewport={{ once: true }}
              >
                <AsteroidTriviaCard
                  id='width-trivia-card-component'
                  asteroidData={selectedAsteroid}
                  triviaType='width'
                  ref={triviaRef}
                />
              </motion.div>
            </TriviaGroup>
          )}
        </section>
        <ProjectOverview />
      </Body>
    </Container>
  );
}
