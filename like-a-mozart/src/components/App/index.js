import "./style.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ROUTES } from "./routes";
import TestPage from "../pages/TestPage";
import SignUpPage from "../pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route element={<HomePage />} path={ROUTES.home} exact />
          <Route element={<LoginPage />} path={ROUTES.login} exact />
          <Route element={<SignUpPage />} path={ROUTES.signUp} exact />
          <Route element={<ProductsPage />} path={ROUTES.products} exact />
          <Route element={<AboutPage />} path={ROUTES.about} exact />
          <Route element={<TestPage />} path="test" exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
