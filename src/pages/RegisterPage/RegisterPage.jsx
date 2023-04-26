import { SignUp } from "../../components/SignUp/SignUp";
import { Container, StyledLink } from "./RegisterPage.styled";

export const RegisterPage = () => {
  return (
    <Container>
      <h1>Register</h1>
      <SignUp />
      <p>
        Already have an account? <StyledLink to="/login">Sign in</StyledLink>
      </p>
    </Container>
  );
};
