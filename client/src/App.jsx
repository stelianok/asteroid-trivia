import { useToggle } from "@mantine/hooks";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

import { ApplicationTheme } from "./config/theme";

import { AsteroidProvider } from "./contexts/asteroid";
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";

function App() {
  const [colorScheme, toggleColorScheme] = useToggle("dark", ["light", "dark"]);

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
          <AsteroidProvider>
            <LandingPage />
          </AsteroidProvider>
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
