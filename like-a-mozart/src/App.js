import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/Home/Home";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Products from "./Pages/Products/Products";
import AboutPage from "./Pages/About/About";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<HomePage/>} path="/" exact />
        <Route element={<Products/>} path="products" exact />
        <Route element={<AboutPage/>} path="about" exact />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
