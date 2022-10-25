import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";
const Header = () => {
  return (
    <div>
      <div className="navbar bg-violet-900 ">
        <Link to="/">
          <h1 className="font-serif">
            <span className="text-fuchsia-500 text-4xl ">Graphic</span>
            <span className="text-fuchsia-200 text-4xl">Master</span>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
