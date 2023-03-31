import { Form } from "../Form/Form";
import { useDispatch } from "react-redux";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";

export const Login = () => {
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
        if (user.emailVerified) {
          navigate("/");
        } else {
          sendEmailVerification(user).then((res) => {
            navigate("/email-not-verified");
          });
        }
      })
      .catch(() => navigate("/not-found-user"));
  };

  return <Form title="Sign In" handleClick={handleLogin} />;
};
