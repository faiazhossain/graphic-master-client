import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";

import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-12 md:grid-flow-col gap-4">
        <div className="col-span-8 md:col-span-9 lg:col-span-10">
          <Outlet></Outlet>
        </div>

        <RightSideNav className="col-span-4 md:col-span-3 lg:col-span-2 "></RightSideNav>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
