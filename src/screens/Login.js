import { useState } from "react";
import styled, { css } from "styled-components";
import { darkModeVar, isLoggedInVar } from "../apollo";

const Container = styled.div`
  background: ${(p) => p.theme.bgColor};
`;

const Title = styled.h1`
  color: ${(p) => p.theme.fontColor};
  font-size: 26px;
`;

const TogglePotato = styled.button`
  color: red;
  ${(p) =>
    p.potato
      ? css`
          background: green;
          text-decoration: underline;
        `
      : css`
          background: inherit;
        `}
`;

const Login = () => {
  const [potato, setPotato] = useState(false);
  const togglePotato = () => setPotato((current) => !current);
  return (
    <Container>
      <Title>Login</Title>
      <button onClick={() => isLoggedInVar(true)}>Log In Now!</button>
      <TogglePotato onClick={togglePotato} potato={potato}>
        Toggle Potato
      </TogglePotato>
      <button onClick={() => darkModeVar(true)}>To Dark</button>
      <button onClick={() => darkModeVar(false)}>To Light</button>
    </Container>
  );
};

export default Login;
