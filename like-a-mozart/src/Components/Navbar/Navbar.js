import "./Navbar.css"
import MusicIcon from "../Icons/MusicIcon";
import { Link } from "react-router-dom";

const NavbarMenu = props => <ul className="navbar__menu" {...props}/>

const NavbarItem = props => <li className="navbar__item" {...props}/>

const NavbarLink = props => <Link to="/" className="navbar__links" {...props}/>

const NavbarButton = props => 
  <li className="navbar__btn">
    <a href="" className="button">{props.children}</a>
  </li>

export default function Navbar() {
  return <div className="navbar">
    <div className="navbar-container">
      <Link to="/" className="logo">
        <MusicIcon className="logo__icon"/>
        Like a Mozart
      </Link>
      <div className="navbar_toogle" id="mobile-menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <NavbarMenu>
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
</div>;
} 
