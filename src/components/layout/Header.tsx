import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">Chonks</div>
      <nav className="header__navigation">
        <ul>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/upload">Upload Meme</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
