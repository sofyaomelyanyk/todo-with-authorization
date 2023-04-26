import { Container, StyledLink } from "./LoginPage.styled";

import { Login } from "../../components/Login/Login";

export const LoginPage = () => {
  return (
    <Container>
      <h1>Login</h1>
      <Login />
      <p>
        Or <StyledLink to="/register">register</StyledLink>
      </p>
    </Container>
  );
};
