import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";

import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default Main;
