import { Form } from "../Form/Form";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";

export const SignUp = () => {
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };
  return <Form title="Register" handleClick={handleRegister} />;
};
