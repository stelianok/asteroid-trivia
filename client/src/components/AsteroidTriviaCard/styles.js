import styled from "styled-components";

const CardGroup = styled.div`
  background-color: #0a0a0af2;
  padding: 2rem;

  border-radius: 1rem;
  min-width: 450px;
  height: 100%;

  & > h2 {
    font-size: 1.5rem;
    font-weight: bolder;

    color: #fff;

    margin: 0;
  }
`;

const ListAnimals = styled.ul`
  line-height: 2;
  padding: 0 20px;

  & li {
    list-style-type: none;
    margin-bottom: 1rem;
  }
`;

const Item = styled.li`
  list-style-type: none;
  counter-increment: counter(item);

  &:before {
    content: "${(props) => props.emote}";
    display: inline-block;

    margin-right: 0.5rem;
    background-color: #ffffff30;

    width: 3rem;
    height: 3rem;

    border-radius: 5px;

    text-align: center;
    font-size: 1.5rem;
  }

  & > span, strong {
    font-weight: bolder;
    color: #ffffff;
  }
`;

export { CardGroup, ListAnimals, Item };
