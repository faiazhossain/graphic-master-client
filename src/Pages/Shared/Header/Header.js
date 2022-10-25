import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
const Header = () => {
  return (
    <div>
      <div className=""></div>

      {/*  */}
      <div className="navbar bg-violet-900 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">
                <h1 className="font-serif">
                  <span className="text-fuchsia-500 text-2xl ">Graphic</span>
                  <span className="text-fuchsia-200 text-2xl">Master</span>
                </h1>
              </Link>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <img src={logo} alt="" className="w-20 mr-4" />
          <div className="navbar-center hidden lg:flex">
            <Link to="/">
              <h1 className="font-serif">
                <span className="text-fuchsia-500 text-4xl ">Graphic</span>
                <span className="text-fuchsia-200 text-4xl">Master</span>
              </h1>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-fuchsia-200 menu menu-horizontal p-0">
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Blog</a>
            </li>

            <li>
              <button>Toggle Theme</button>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Header;
