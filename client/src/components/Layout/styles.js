import styled from "styled-components";
import { AppShell } from "@mantine/core";

import { Patterns } from "./../../config/assets";

const AppLayout = styled(AppShell)`
  background-color: #2e2e2e;
  background-image: url(${Patterns.Noise.path});
  background-blend-mode: overlay;

  overflow: hidden;
`;

export { AppLayout };
