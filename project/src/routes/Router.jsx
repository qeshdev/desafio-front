import {BrowserRouter, Routes, Route} from "react-router-dom";
import EmailVerifyPage from "../pages/EmailVerifyPage/EmailVerifyPage";
import LoginPage from "../pages/LoginPage/LoginPage";


const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={ <EmailVerifyPage />} />
          <Route path="login" element={ <LoginPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Router;