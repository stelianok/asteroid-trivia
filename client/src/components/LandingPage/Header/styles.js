import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 100%;

  margin: 10px 0;

  overflow: hidden;
`;

const HeaderBody = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5rem 3rem 0 0;
`;

const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 55vh;
  overflow: clip;

  border-radius: 0% 0% 10% 10%;

  /* background: #1a1a1aa8; */
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 10, 1) 100%
  );

  background-blend-mode: overlay;
`;

export { Header, HeaderBody, HeaderBackground };
