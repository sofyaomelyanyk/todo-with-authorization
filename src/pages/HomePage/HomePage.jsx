// import s from "../HomePage/HomePage.module.css";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { removeUser } from "../../store/slices/userSlice";

export const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  return (
    <>
      {isAuth ? (
      <div>
        <h1>Home Page</h1>
        <button onClick={() => dispatch(removeUser())}>
          Log Out from {email}
        </button>
      </div>
      ) : (<Navigate replace to="/login"></Navigate>
      )}
    </>
  );
};
