import { ActionsGroup, NavigationBox, NavigationContainer } from "./styles";

import { ApplicationIcons } from "../../../config/assets";
import { useColorScheme } from "@mantine/hooks";

import { Actions } from "../../../config/actions";
import { MediaQuery } from "@mantine/core";

export default function NavigationBar({ actions }) {
  const colorScheme = useColorScheme();
  const Logo = ApplicationIcons.HorizontalLogo.theme[colorScheme];

  console.log(ApplicationIcons.HorizontalLogo.theme[colorScheme]);

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
          {Actions.map(({ key, name, toGo }) => (
            <a key={key} href={toGo}>
              {name}
            </a>
          ))}
        </ActionsGroup>
      </NavigationContainer>
    </NavigationBox>
  );
}
