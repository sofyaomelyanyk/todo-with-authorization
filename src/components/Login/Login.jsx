import { LoginForm } from "../LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
import { useState } from "react";


export const Login = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        if (!user.emailVerified) {
          navigate("/email-not-verified");
        } else {
          navigate("/");
        }
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch(() => setError(true));
  };

  return <LoginForm title="Sign In" error={error} handleClick={handleLogin} />;
};
