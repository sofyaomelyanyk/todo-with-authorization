import { useState } from "react";
import s from "../Form/Form.module.css";

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={s.form}>
      <div className={s["form-field"]}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className={s["form-field"]}>
        <label>Password</label>
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
