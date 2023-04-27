import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4b0082;
`;

export const Title = styled.h1`
  font-size: 45px;
`;
export const Text = styled.p`
  font-size: 20px;
`;
export const Wrap = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
export const Container = styled.div`
  width: 500px;
  padding: 40px 30px;
  background-color: rgb(255, 255, 255);
  -webkit-box-shadow: 10px 3px 18px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 3px 18px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 3px 18px 3px rgba(0, 0, 0, 0.75);

  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;