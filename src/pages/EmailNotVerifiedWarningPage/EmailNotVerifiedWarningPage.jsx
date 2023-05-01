import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const EmailVerificationWarningPage = () => {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = app.currentUser;

    if (user) {
      setIsVerified(user.emailVerified);
    }
  }, []);

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className={styles["warning-page"]}>
      {isVerified ? (
        <p className={styles["verified-message"]}>
          Your email is verified. You can access this page.
        </p>
      ) : (
        <div>
          <p className={styles["verification-warning"]}>
            Your email is not verified.
          </p>
          <p>An email has been sent to your email, please confirm it</p>
        </div>
      )}
      <button onClick={handleBack} className={styles["back-button"]}>
        Back to login
      </button>
    </div>
  );
};
