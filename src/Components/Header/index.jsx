import React from "react";
import "./styles.css";
import Logo from "../../assets/svg/Logo/logo";
import Login from "../../assets/svg/Login/login";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-box">
        <p>
          Viva<span>Pets</span>.
        </p>
        <Logo />
      </div>
      <nav>
        <a href="/Login">  
        <button className="login-button">
          Login
          <Login />
        </button>
        </a>
      </nav>
    </header>
  );
}
