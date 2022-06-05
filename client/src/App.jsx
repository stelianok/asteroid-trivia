import { useState, useEffect } from "react";

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import axios from "axios";
// import AsteroidTriviaCard from './components/AsteroidTriviaCard';

import { useToggle } from "@mantine/hooks";

import { ApplicationTheme } from "./config/theme";

import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";

const baseURL =
  "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=XbOL6eVBSgeONZepEUOQhgEODrnISyPUHht7iTsC";

function App() {
  const [asteroids, setAsteroids] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setAsteroid(response.data.near_earth_objects);
    });
  }, []);

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
        <Layout>
          <LandingPage />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
