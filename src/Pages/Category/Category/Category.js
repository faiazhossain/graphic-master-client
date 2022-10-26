import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../../Shared/CourseSummaryCard/CourseSummaryCard";

const Category = () => {
  const allCourse = useLoaderData();

  return (
    <div>
      {allCourse.map((singleCourse) => (
        <CourseSummaryCard
          key={singleCourse.id}
          singleCourse={singleCourse}
        ></CourseSummaryCard>
      ))}
    </div>
  );
};

export default Category;
