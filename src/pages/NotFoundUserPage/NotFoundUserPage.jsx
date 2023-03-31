import styles from "./NotFoundUserPage.module.scss";

import { useNavigate } from "react-router-dom";

export const NotFoundUserPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/register");
  };

  return (
    <div className={styles["warning-page"]}>
      <p className={styles["verification-warning"]}>
        User with this email does not exist
      </p>
      <p>You can register</p>
      <button onClick={handleBack} className={styles["back-button"]}>
        Back to register
      </button>
    </div>
  );
};
