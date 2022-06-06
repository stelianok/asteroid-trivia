import { useToggle, useScrollIntoView } from "@mantine/hooks";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

import { ApplicationTheme } from "./config/theme";

// import AsteroidTriviaCard from './components/AsteroidTriviaCard';
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";

function App() {
  const [colorScheme, toggleColorScheme] = useToggle("dark", ["light", "dark"]);

  const { scrollIntoView: scrollToAsteroid, targetRef: asteroidRef } =
    useScrollIntoView({ offset: 60 });
  const { scrollIntoView: scrollToTrivia, targetRef: triviaRef } =
    useScrollIntoView({ offset: 60 });

  const refs = {
    asteroid: {
      current: asteroidRef,
      scrollToAsteroid,
    },
    trivia: {
      current: triviaRef,
      scrollToTrivia,
    },
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, ...ApplicationTheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Layout refs={refs}>
          <LandingPage refs={refs} />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
