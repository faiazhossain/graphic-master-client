import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
    </div>
  );
};

export default Main;
