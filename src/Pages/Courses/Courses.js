import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../Shared/CourseCard/CourseCard";

const Courses = () => {
  const allCourses = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-4 mt-12">
      {allCourses.map((course) => (
        <CourseCard key={course.id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Courses;
