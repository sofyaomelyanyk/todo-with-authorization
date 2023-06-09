import { RegisterForm } from "../RegisterForm/RegisterForm";
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

  const handleRegister = async (name, email, password) => {
    try {
      const auth = getAuth();
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      dispatch(
        setUser({
          name,
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
          console.log(name);
        });
      }
    } catch {
      navigate("/user-already-exists");
    }
  };
  return <RegisterForm title="Register" handleClick={handleRegister} />;
};

// const auth = getAuth();

//     const res = await createUserWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => {
//         console.log(user);

//         dispatch(
//           setUser({
//             name,
//             email: user.email,
//             id: user.uid,
//             token: user.accessToken,
//           })
//         );

//         if (user.emailVerified) {
//           navigate("/");
//         } else {
//           sendEmailVerification(user).then((res) => {
//             navigate("/email-not-verified");
//             console.log(name);
//           });
//         }
//       })
//       .catch(() => navigate("/user-already-exists"));
//     const user = res.user;
//     await user.updateProfile({ displayName: name });
//     console.log(user.displayName);
