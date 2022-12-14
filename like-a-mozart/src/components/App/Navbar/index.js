import "./style.css";

import { Link, useNavigate } from "react-router-dom";
import MusicIcon from "../../ui/MusicIcon";
import { useState } from "react";
import { ROUTES } from "../routes";
import { notifySuccess } from "../../../lib/notification";
import { useAuthContext } from "../AuthenticationProvider";

const NavbarMenu = ({ active, ...props }) => (
  <ul className={`navbar__menu ${active ? "active" : ""}`} {...props} />
);

const NavbarItem = props => <li className="navbar__item" {...props} />;

const NavbarLink = props => (
  <Link to="/" className="navbar__links" {...props} />
);

const NavbarButton = props => (
  <li className="navbar__btn" {...props}>
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
  const { authenticated, authenticatedUser, logout } = useAuthContext();
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(it => !it);
  const navigate = useNavigate();

  const closeMenu = () => setMenuActive(false);

  const handleLoginClick = event => {
    event.preventDefault();
    closeMenu();
    navigate(ROUTES.login);
  };

  const handleLogoutClick = event => {
    event.preventDefault();
    closeMenu();
    logout();
    navigate(ROUTES.home);
    notifySuccess(`Sessão encerrada, ${authenticatedUser.name}.`);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <MusicIcon className="logo__icon">Like a Mozart</MusicIcon>
        </Link>
        <MobileMenu onClick={toggleMenu} />
        <NavbarMenu active={menuActive}>
          <NavbarItem>
            <NavbarLink to={ROUTES.home} onClick={closeMenu}>
              Home
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to={ROUTES.about} onClick={closeMenu}>
              About us
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to={ROUTES.products} onClick={closeMenu}>
              Produtos
            </NavbarLink>
          </NavbarItem>
          {authenticated ? (
            <>
              {/* <NavbarItem>
                  <NavbarLink to={ROUTES.profile} onClick={closeMenu}>
                    Minha conta
                  </NavbarLink>
                </NavbarItem> */}
              <NavbarButton onClick={handleLogoutClick}>Logout</NavbarButton>
            </>
          ) : (
            <NavbarButton onClick={handleLoginClick}>Login</NavbarButton>
          )}
        </NavbarMenu>
      </div>
    </div>
  );
};

export default Navbar;
