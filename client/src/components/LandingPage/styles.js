import { Group, Title as TitleComponent } from "@mantine/core";
import styled from "styled-components";

const Body = styled.div`
  margin: 2rem;
  height: 100%;
  & > section {
    margin: 6rem 0;
  }
`;

const Container = styled.div``;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: -0.5rem;
`;

const Title = styled(TitleComponent)`
  font-weight: bolder;
  font-family: "Work Sans", sans-serif;
  font-size: 4rem;
  color: #fff;
  margin: 0;
`;

const Desription = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const TriviaGroup = styled(Group)`
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export { Body, Container, TriviaGroup, Title, Desription, SectionContainer };