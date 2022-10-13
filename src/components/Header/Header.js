import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/shop" className="menu-link">
              Shop
            </Link>
            <Link to="/order" className="menu-link">
              order
            </Link>
            <Link to="/inventory" className="menu-link">
              Inventory
            </Link>
            <Link to="/about" className="menu-link">
              about
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
