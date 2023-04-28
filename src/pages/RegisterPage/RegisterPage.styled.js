import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4b0082;
`;

export const ImgWrap = styled.div`
  @media (min-width: 768px) {
    display: block;
    width: 700px;
  }
`;
export const Title = styled.h1`
  font-size: 40px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
export const Text = styled.p`
  font-size: 25px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
export const Wrap = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (min-width: 768px) {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  @media (min-width: 1280px) {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
`;

export const Container = styled.div`
  width: 100%;

  padding: 60px 20px;
  background-color: rgb(255, 255, 255);
  -webkit-box-shadow: 10px 3px 18px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 3px 18px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 3px 18px 3px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  @media (min-width: 768px) {
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
    gap: 30px;
  }
`;
