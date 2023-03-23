// import s from "../RegisterPage/RegisterPage.module.css";
import { Link } from "react-router-dom";
import { SignUp } from "../../components/SignUp/SignUp";

export const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};
