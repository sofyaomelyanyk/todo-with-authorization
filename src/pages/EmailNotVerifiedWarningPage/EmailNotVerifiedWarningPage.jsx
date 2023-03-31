import styles from "./styles.module.scss";

import { useNavigate } from "react-router-dom";

export const EmailVerificationWarningPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className={styles["warning-page"]}>
      <div>
        <p className={styles["verification-warning"]}>
          Your email is not verified.
        </p>
        <p>Please verify your email to access this page.</p>
      </div>

      <button onClick={handleBack} className={styles["back-button"]}>
        Back to login
      </button>
    </div>
  );
};
