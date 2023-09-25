import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const RoutesProvides = (isAuth) => {
  if (isAuth) {
    return <Routes>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
      } 
    return <Routes>
        <Route path="/" element={<SignInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
  }


export default RoutesProvides;
