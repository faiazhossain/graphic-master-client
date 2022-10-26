import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h2>Here are {courses.length} course</h2>
    </div>
  );
};

export default Category;
