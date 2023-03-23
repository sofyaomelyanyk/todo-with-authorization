// import s from "../LoginPage/LoginPage.module.css";

import { Link } from "react-router-dom";
import { Login } from "../../components/Login/Login";

export const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login/>
      <p>
        Or <Link to="/register">register</Link>
      </p>
    </div>
  );
};
