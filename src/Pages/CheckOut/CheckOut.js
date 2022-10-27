import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourseCheckOut from "./SingleCourseCheckOut";

const CheckOut = () => {
  const allCourse = useLoaderData();
  return (
    <div>
      {allCourse.map((singleCourse) => (
        <SingleCourseCheckOut
          key={singleCourse.id}
          singleCourse={singleCourse}
        ></SingleCourseCheckOut>
      ))}
    </div>
  );
};

export default CheckOut;
