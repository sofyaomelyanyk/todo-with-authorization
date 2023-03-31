
import styles from "./UserAlreadyExists.module.scss";

import { useNavigate } from "react-router-dom";

export const UserAlreadyExists = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className={styles["warning-page"]}>
      <p className={styles["verification-warning"]}>
        User with this email already exist
      </p>
      <p>You can login</p>
      <button onClick={handleBack} className={styles["back-button"]}>
        Back to login
      </button>
    </div>
  );
};
