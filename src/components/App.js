import { Routes, Route } from "react-router-dom";

import { EmailVerificationWarningPage } from "../pages/EmailNotVerifiedWarningPage/EmailNotVerifiedWarningPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { NotFoundUserPage } from "../pages/NotFoundUserPage/NotFoundUserPage";
import { UserAlreadyExists } from "../pages/UserAlreadyExists/UserAlreadyExists";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/email-not-verified"
          element={<EmailVerificationWarningPage />}
        />
        <Route path="/not-found-user" element={<NotFoundUserPage />} />
        <Route path="/user-already-exists" element={<UserAlreadyExists />} />
      </Routes>
    </>
  );
}

export default App;
