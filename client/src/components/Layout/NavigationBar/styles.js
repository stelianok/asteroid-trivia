import { Group, Header } from '@mantine/core'

import styled from "styled-components";

const NavigationBox = styled(Header)`
  position: absolute;

  background-color: transparent;
  border: none;
`;

const NavigationContainer = styled(Group)`
  width: 100%;
  flex-wrap: nowrap;
`;

const ActionsGroup = styled(Group)`
  gap: 2.5rem;

  & > a {
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export { NavigationBox, NavigationContainer, ActionsGroup };