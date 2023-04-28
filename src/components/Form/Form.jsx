import { useState } from "react";
import s from "../Form/Form.module.scss";

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email is required");
  const [passwordError, setPasswordError] = useState("Password is required");

  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (
      !String(e.target.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailError("Ivalid email");
    } else setEmailError("");
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6 || e.target.value.length > 8) {
      setPasswordError("Password must be between 6 and 8 characters");
      if (!e.target.value) {
        setPasswordError("Password is required");
      }
    } else setPasswordError("");
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        console("default");
    }
  };

  return (
    <div className={s.form}>
      <div className={s["form-field"]}>
        <label className={s.text}>Email</label>
        {emailError && emailDirty && (
          <div className={s.error}>{emailError}</div>
        )}
        <input
          className={s.input}
          onBlur={(e) => blurHandler(e)}
          type="email"
          value={email}
          name="email"
          onChange={(e) => emailHandler(e)}
          placeholder="Email"
        />
      </div>
      <div className={s["form-field"]}>
        <label className={s.text}>Password</label>
        {passwordError && passwordDirty && (
          <div className={s.error}>{passwordError}</div>
        )}
        <input
          className={s.input}
          onBlur={(e) => blurHandler(e)}
          type="password"
          value={password}
          name="password"
          onChange={(e) => passwordHandler(e)}
          placeholder="Password"
        />
      </div>

      {!emailError && !passwordError ? (
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
