import {BrowserRouter, Routes, Route} from "react-router-dom";
import EmailVerifyPage from "../pages/EmailVerifyPage/EmailVerifyPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import UserInfoPage from "../pages/UserInfoPage/UserInfoPage";


const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={ <EmailVerifyPage />} />
          <Route path="login" element={ <LoginPage />} />
          <Route path="user-info" element={ <UserInfoPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Router;