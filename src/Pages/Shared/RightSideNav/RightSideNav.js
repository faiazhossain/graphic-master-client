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
    <ul className="menu menu-compact lg:menu-normal w-56 p-2 rounded-box">
      {courses.map((course) => (
        <li key={course.id}>
          <Link
            className="bg-fuchsia-300 mt-2 hover:bg-fuchsia-200 ease-in duration-200"
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
