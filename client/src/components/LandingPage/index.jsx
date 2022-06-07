import { memo, useContext } from "react";
import { motion } from "framer-motion";

import { AsteroidContext } from "../../contexts/asteroid";
import { animations } from "../../config/animations";

import { Body, Title, Container, TriviaGroup } from "./styles";

import Header from "../Layout/Header";
import AsteroidCard from "../AsteroidCard";
import AsteroidTriviaCard from "../AsteroidTriviaCard";
import ProjectOverview from "../ProjectOverview";

export default function LandingPage() {
  const { selectedAsteroid } = useContext(AsteroidContext);

  const AsteroidCardMemoized = memo(
    AsteroidCard,
    (prevProps, nextProps) => prevProps.asteroid.id === nextProps.asteroid.id
  );

  const TriviaCardMemoized = memo(
    AsteroidTriviaCard,
    (prevProps, nextProps) =>
      prevProps.asteroid.id === nextProps.asteroid.id &&
      prevProps.triviaType === nextProps.triviaType
  );

  return (
    <Container>
      <Header>
        {selectedAsteroid && (
          <motion.div
            id='asteroid-card-motion'
            whileHover={{ scale: 1.05 }}
            {...animations.fadeRightIn}
          >
            <AsteroidCardMemoized
              id='asteroid-card-component'
              asteroid={selectedAsteroid}
            />
          </motion.div>
        )}
      </Header>
      <Body>
        <Title>Trivia Cards</Title>
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
                <TriviaCardMemoized
                  id='speed-trivia-card-component'
                  asteroid={selectedAsteroid}
                  triviaType='speed'
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
                <TriviaCardMemoized
                  id='width-trivia-card-component'
                  asteroid={selectedAsteroid}
                  triviaType='width'
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
