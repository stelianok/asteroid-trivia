import styled from "styled-components";

const CardContainer = styled.div`
  width: fit-content;
  max-width: 600px;

  display: flex;
  padding: 20px 20px;

  gap: 40px;

  background-color: #0a0a0af2;
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

  & > label {
    display: flex;
    align-items: center;

    & > img {
      margin-right: 1rem;
    }
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
    text-transform: capitalize;
    font-size: 1.2rem;
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

    margin-left: 1rem;

    & > span {
      font-size: 1rem;
      // color: #fff;
      color: #c7c7c7;
    }

    & > h3 {
      font-size: 1.1rem;
      color: #fff;
      // color: #c7c7c7;
    }
  }

  & > img {
    width: 1.5rem;
    height: 1.5rem;
  }

  & > .emoji {
    font-size: 1.5rem;
    width: 1.5rem;
  }
`;

const BooleanValue = styled.span`
  color: ${({ value: isDanger }) =>
    isDanger ? "#ff0000" : "#00ff00"} !important;
  font-weight: 500;
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
  BooleanValue,
};
