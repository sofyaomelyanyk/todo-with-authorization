import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4b0082;
`;

export const Container = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  border: 2px solid rgb(209, 206, 206);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
