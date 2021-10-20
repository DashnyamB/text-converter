import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import mn from "../assets/images/country=mgl.png";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img
            src={logo}
            alt="National University logo"
            width="35"
            height="35"
          />
          <p className="ml-2">БИЧВЭР БОЛОВСРУУЛАЛТ</p>
        </a>
        <div className="navbar-burger" onClick={() => setShow(!show)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <Link to="/how">Хэрхэн ажилладаг вэ?</Link>
              </p>
              <p className="control">
                <Link to="/about">Бидний тухай</Link>
              </p>
              <p className="control">
                <img src={mn} alt="Хэл" width="20" height="20" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
