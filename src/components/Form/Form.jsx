import { useState } from "react";
import s from "../Form/Form.module.css";

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("Email is required");

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Неккоректный Email");
    } else setEmailError("");
  };

  return (
    <div className={s.form}>
      <div className={s["form-field"]}>
        
        <label className={s.text}>Email</label>
        {emailError && <div>{emailError}</div>}
        <input
          type="email"
          value={email}
          onChange={(e) => emailHandler(e)}
          placeholder="Email"
        />
      </div>
      <div className={s["form-field"]}>
        <label className={s.text}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>

      {email && password ? (
        <div className={s["form-field"]}>
          <button
            className={s.button}
            onClick={(e) => handleClick(email, password)}
          >
            {title}
          </button>
        </div>
      ) : (
        <div className={s["form-field"]}>
          <button className={s["button-disabled"]} disabled>
            {title}
          </button>
        </div>
      )}
    </div>
  );
};
