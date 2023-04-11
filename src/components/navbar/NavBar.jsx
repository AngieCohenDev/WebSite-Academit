import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.jpg";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#aboutUs">Sobre Nosotros</a>
    </p>
    <p>
      <a href="#contenido">Servicios</a>
    </p>
    <p>
      <a href="#possibility">Cursos</a>
    </p>
    <p>
      <a href="#feature">¿Por qué elegirnos?</a>
    </p>
    <p>
      <a href="#blog">Contacto</a>
    </p>
  </>
);

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="acad__navbar">
      <div className="acad__navbar-links">
        <div className="acad__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="acad__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="acad__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="acad__navbar-menu">
        {toggleMenu ? 
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
         : 
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        }
        {toggleMenu && (
          <div className="acad__navbar-menu_container scale-up-center">
            <div className="acad__navbar-menu_container-links">
              <Menu />
              <div className="acad__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
