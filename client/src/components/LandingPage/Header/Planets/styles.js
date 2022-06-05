import styled from "styled-components";

const BasePlanet = styled.div`
  margin: 0 0 0.5rem 0;

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 200px;
  height: 200px;
`;

export { BasePlanet };
