import "./style.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ROUTES } from "./routes";
import SignUpPage from "../pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthenticationProvider from "./AuthenticationProvider";
import Box from "../ui/Box";

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <AuthenticationProvider>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route element={<HomePage />} path={ROUTES.home} exact />
            <Route element={<LoginPage />} path={ROUTES.login} exact />
            <Route element={<SignUpPage />} path={ROUTES.signUp} exact />
            <Route element={<ProductsPage />} path={ROUTES.products} exact />
            <Route element={<AboutPage />} path={ROUTES.about} exact />
          </Routes>
          <Footer />
        </AuthenticationProvider>
      </BrowserRouter>
    </Box>
  );
};

export default App;
