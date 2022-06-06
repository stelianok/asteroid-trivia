import { Anchor, Group, Header } from '@mantine/core'

import styled from "styled-components";

const NavigationBox = styled(Header)`
  position: absolute;

  background-color: transparent;
  border: none;
`;

const NavigationContainer = styled(Group)`
  width: 100%;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ActionsGroup = styled(Group)`
  gap: 2.5rem;

  & > a {
    color: #fff;
    font-size: 1rem;
    cursor: pointer;

    background-color: transparent;
    border-radius: 8px;
    padding: 0.5rem 1rem;

    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #5e2990;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export { NavigationBox, NavigationContainer, ActionsGroup };