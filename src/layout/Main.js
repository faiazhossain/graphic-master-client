import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="">
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer className="absolute bottom-0"></Footer>
    </div>
  );
};

export default Main;
