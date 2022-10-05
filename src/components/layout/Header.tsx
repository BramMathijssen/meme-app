import React from "react";
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">Meme App</div>
      <nav className="header__navigation">
        <ul>
          <li>Register</li>
          <li>Login</li>
          <li>Upload Meme</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
