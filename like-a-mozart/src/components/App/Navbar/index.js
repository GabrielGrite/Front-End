import "./style.css";

import { Link } from "react-router-dom";
import MusicIcon from "../../ui/MusicIcon";
import { useState } from "react";

const NavbarMenu = ({ active, ...props }) => (
  <ul className={`navbar__menu ${active ? "active" : ""}`} {...props} />
);

const NavbarItem = props => <li className="navbar__item" {...props} />;

const NavbarLink = props => (
  <Link to="/" className="navbar__links" {...props} />
);

const NavbarButton = props => (
  <li className="navbar__btn">
    <a href="" className="button">
      {props.children}
    </a>
  </li>
);

const MobileMenu = props => (
  <div className="navbar_toogle" id="mobile-menu" {...props}>
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </div>
);

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(it => !it);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <MusicIcon className="logo__icon">Like a Mozart</MusicIcon>
        </Link>
        <MobileMenu onClick={toggleMenu} />
        <NavbarMenu active={menuActive}>
          <NavbarItem>
            <NavbarLink to="/">Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/about">About us</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/products">Produtos</NavbarLink>
          </NavbarItem>
          <NavbarButton>Cadastrar</NavbarButton>
        </NavbarMenu>
      </div>
    </div>
  );
};

export default Navbar;
