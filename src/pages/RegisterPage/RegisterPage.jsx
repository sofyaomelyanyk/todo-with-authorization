import { SignUp } from "../../components/SignUp/SignUp";
import BGImg from "../../images/todo-img.png";
import {
  Container,
  StyledLink,
  Wrap,
  Text,
  Title,
  ImgWrap,
} from "./RegisterPage.styled";

export const RegisterPage = () => {
  return (
    <Wrap>
      <ImgWrap>
        <img src={BGImg} alt="" />
      </ImgWrap>

      <Container>
        <Title>Register</Title>
        <SignUp />
        <Text>
          Already have an account? <StyledLink to="/login">Sign in</StyledLink>
        </Text>
      </Container>
    </Wrap>
  );
};
