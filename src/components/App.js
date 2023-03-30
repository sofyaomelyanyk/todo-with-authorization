import {
  
  Routes,
  Route,
} from "react-router-dom";
// import { routes } from "../routes";
import { EmailVerificationWarningPage } from "../pages/EmailNotVerifiedWarningPage/EmailNotVerifiedWarningPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

// const router = createBrowserRouter(routes);

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="//email-not-verified"
          element={<EmailVerificationWarningPage />}
        />
      </Routes>
    </>
  );
}

export default App;
