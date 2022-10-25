import React from "react";
import { Outlet } from "react-router-dom";
import Category from "../Category/Category/Category";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Courses = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Category></Category>
      <RightSideNav></RightSideNav>
    </div>
  );
};

export default Courses;
