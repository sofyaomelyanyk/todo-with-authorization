import { EmailVerificationWarningPage } from "./pages/EmailNotVerifiedWarningPage/EmailNotVerifiedWarningPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/email-not-verified", element: <EmailVerificationWarningPage /> },
];

