import "./style.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductsPage from "../Pages/ProductsPage";
import AboutPage from "../Pages/AboutPage";
import LoginPage from "../Pages/LoginPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ROUTES } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path={ROUTES.home} exact />
        <Route element={<LoginPage />} path={ROUTES.login} exact />
        <Route element={<ProductsPage />} path={ROUTES.products} exact />
        <Route element={<AboutPage />} path={ROUTES.about} exact />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
