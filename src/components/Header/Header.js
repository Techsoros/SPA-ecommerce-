import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="brand-logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-menu">
            <a href="/shop" className="menu-link">
              Shop
            </a>
            <a href="/order" className="menu-link">
              order
            </a>
            <a href="/Inventory" className="menu-link">
              Inventory
            </a>
            <a href="/about" className="menu-link">
              about
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
