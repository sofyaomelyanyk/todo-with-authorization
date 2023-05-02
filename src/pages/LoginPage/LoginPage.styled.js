import { Link } from "react-router-dom";
import styled from "styled-components";

export const BgColor = styled.div`
  width: 100vw;
  height: 100vh;
  background: #adccea;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4b0082;
`;

export const ImgWrap = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 700px;
  }
`;
export const Title = styled.h1`
  font-size: 30px;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`;
export const Text = styled.p`
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
export const Wrap = styled.div`
  padding-top: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (min-width: 768px) {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  @media (min-width: 1280px) {
    padding-top: 130px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 50px 20px;
  background-color: rgb(255, 255, 255);
  -webkit-box-shadow: 10px 3px 18px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 3px 18px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 3px 18px 3px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
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
