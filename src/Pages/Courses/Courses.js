import React from "react";
import { useLoaderData } from "react-router-dom";

import CourseCard from "../Shared/CourseCard/CourseCard";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Courses = () => {
  const allCourses = useLoaderData();
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-12 lg:ml-16">
        {allCourses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
      <div>
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default Courses;
