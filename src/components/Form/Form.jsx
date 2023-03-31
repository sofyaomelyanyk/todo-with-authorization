import { useState } from "react";
import "../Form/Form.module.css";

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        
      />
      {email && password ? (
        <button onClick={(e) => handleClick(email, password)}>{title}</button>
      ) : (
        <button disabled>{title}</button>
      )}
    </div>
  );
};
