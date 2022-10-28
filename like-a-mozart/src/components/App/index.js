import "./style.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductsPage from "../Pages/ProductsPage";
import AboutPage from "../Pages/AboutPage";
import LoginPage from "../Pages/LoginPage";
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<LoginPage />} path="login" exact />
        <Route element={<HomePage />} path="/" exact />
        <Route element={<ProductsPage />} path="products" exact />
        <Route element={<AboutPage />} path="about" exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
