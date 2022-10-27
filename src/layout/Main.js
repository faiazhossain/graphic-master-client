import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="">
        {/* flex flex-col-reverse lg:grid lg:grid-cols-12 */}
        <div>
          {/* className="col-span-10" */}
          <Outlet></Outlet>
        </div>
        {/* <RightSideNav className="col-span-2"></RightSideNav> */}
      </div>
      <Footer className="absolute bottom-0"></Footer>
    </div>
  );
};

export default Main;
