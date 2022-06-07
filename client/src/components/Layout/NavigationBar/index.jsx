import { useColorScheme } from "@mantine/hooks";

import { ActionsGroup, NavigationBox, NavigationContainer } from "./styles";

import { ApplicationIcons } from "../../../config/assets";

import { Actions } from "../../../config/actions";
import { MediaQuery } from "@mantine/core";

export default function NavigationBar() {
  const colorScheme = useColorScheme(),
    Logo = ApplicationIcons.HorizontalLogo.theme[colorScheme];

  return (
    <NavigationBox id='app-navigation-bar' py={20} px={40}>
      <NavigationContainer id='app-navbar-container' position='apart'>
        <MediaQuery
          smallerThan={768}
          styles={{ display: "none", "&>img": { display: "none" } }}
        >
          <img src={Logo} height={40} alt={Logo?.alt} />
        </MediaQuery>
        <ActionsGroup id='actions-group'>
          {Object.values(Actions).map(({ name, key, id, ariaLabel }) => (
            <a key={key} aria-label={ariaLabel} href={`#${id}`}>
              {name}
            </a>
          ))}
        </ActionsGroup>
      </NavigationContainer>
    </NavigationBox>
  );
}
