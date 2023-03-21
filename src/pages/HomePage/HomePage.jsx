// import s from "../HomePage/HomePage.module.css";

import { Navigate } from "react-router-dom";

export const HomePage = () => {
  return (
    <Navigate replace to="/login">
      Home Page
    </Navigate>
  );
};
