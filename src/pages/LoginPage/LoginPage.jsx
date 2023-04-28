import {
  Container,
  StyledLink,
  Wrap,
  Title,
  Text,
  ImgWrap,
} from "./LoginPage.styled";
import BGImg from "../../images/todo-img.png";
import { Login } from "../../components/Login/Login";

export const LoginPage = () => {
  return (
    <Wrap>
      <ImgWrap>
        <img src={BGImg} alt=""  />
      </ImgWrap>
      <Container>
        <Title>Login</Title>
        <Login />
        <Text>
          Or <StyledLink to="/register">register</StyledLink>
        </Text>
      </Container>
    </Wrap>
  );
};
