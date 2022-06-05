import { useState, useEffect } from "react";
import { useToggle } from "@mantine/hooks";

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import axios from "axios";

import { ApplicationTheme } from "./config/theme";

// import AsteroidTriviaCard from './components/AsteroidTriviaCard';
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";

const baseURL =
  "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=XbOL6eVBSgeONZepEUOQhgEODrnISyPUHht7iTsC";

function App() {
  const [asteroids, setAsteroids] = useState(null);
  const [colorScheme, toggleColorScheme] = useToggle("dark", [
    "light",
    "dark",
  ]);
  
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setAsteroids(response.data.near_earth_objects);
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
