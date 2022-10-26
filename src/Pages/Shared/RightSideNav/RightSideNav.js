import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightSideNav = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <ul className="flex flex-wrap gap-4 mt-4 ml-4 justify-between lg:grid lg:col-span-2 lg:justify-items-center lg:place-content-center lg:h-80 lg:bg-fuchsia-300 lg:items-center lg:rounded-lg">
      {courses.map((course) => (
        <li key={course.id}>
          <Link
            className="bg-fuchsia-300 p-1 rounded-lg mt-4 hover:bg-fuchsia-200 ease-in duration-200 "
            to={`/category/${course.id}`}
          >
            {course.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RightSideNav;
