import styled from "styled-components";

const CardContainer = styled.div`
  width: fit-content;
  max-width: 600px;

  display: flex;
  padding: 20px 20px;

  gap: 40px;

  background-color: #0a0a0abd;
  border-radius: 15px;

  & > * {
    letter-spacing: -0.02em;
  }
`;

const CardSection = styled.section`
  display: flex;
  padding: ${(props) => (props.padding ? props.padding : "0")};
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};

  gap: 35px;

  color: #fff;

  justify-content: space-between;

  & > span {
    font-size: 0.8rem;
  }

  & > img {
    align-self: center;
  }

  #asteroid-id {
    font-size: 0.7rem;
    opacity: 0.8;
  }
`;

const CardSectionGroup = styled.div`
  display: flex;
  flex-direction: column;

  & > .container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  & > h2,
  h3 {
    font-weight: normal;
    margin: 0;
  }
`;

const InformationItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;

    & > span {
      font-size: 1rem;
      color: #9f9f9f;
    }
  }

  & > img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
  }
`;

const VerticaLine = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-left: 0.5rem;
    color: #ffffffe0;
  }

  border-left: 2px solid #ffffff9e;
  height: 100%;
`;

const CardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;

  margin: 0;

  color: #a976da;
`;

export {
  CardContainer,
  CardSection,
  CardTitle,
  CardSectionGroup,
  InformationItem,
  VerticaLine,
};
