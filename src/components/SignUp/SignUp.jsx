import { Form } from "../Form/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";

export const SignUp = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(() => navigate("/user-already-exists"));
  };
  return <Form title="Register" handleClick={handleRegister} />;
};
