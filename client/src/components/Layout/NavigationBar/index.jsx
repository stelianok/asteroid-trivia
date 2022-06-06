import { useColorScheme, useScrollIntoView } from "@mantine/hooks";

import { ActionsGroup, NavigationBox, NavigationContainer } from "./styles";

import { ApplicationIcons } from "../../../config/assets";

import { Actions } from "../../../config/actions";
import { MediaQuery } from "@mantine/core";

export default function NavigationBar({ refs }) {
  const colorScheme = useColorScheme(),
    Logo = ApplicationIcons.HorizontalLogo.theme[colorScheme];

   const { scrollIntoView, targetRef } = useScrollIntoView();

  const {
    asteroid: { scrollToAsteroid },
    trivia: { scrollToTrivia },
  } = refs;

  return (
    <NavigationBox id='app-navigation-bar' py={20} px={40}>
      <NavigationContainer id='app-navbar-container' position='apart'>
        <MediaQuery
          smallerThan={768}
          styles={{ display: "none", "&>img": { display: "none" } }}
        >
          <img src={Logo} height={40} alt={Logo?.alt} />
        </MediaQuery>
        <ActionsGroup id='actions-group' ref={targetRef}>
          {Object.values(Actions).map(({ name, key, ref, ariaLabel }) => (
            <a
              key={key}
              aria-label={ariaLabel}
              onClick={() => scrollIntoView()}
            >
              {name}
            </a>
          ))}
        </ActionsGroup>
      </NavigationContainer>
    </NavigationBox>
  );
}
