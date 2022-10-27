import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightSideNav = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://graphic-master-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="lg:bg-pink-200 lg:p-3 lg:ml-4 lg:rounded-xl lg:mt-4">
      <h2 className="text-center text-2xl text-violet-800">Courses</h2>
      <ul className="menu menu-vertical rounded-box lg:w-44 lg:ml-4">
        {courses.map((course) => (
          <li key={course.id}>
            <Link
              className="bg-fuchsia-300 p-3 rounded-lg mt-4 hover:bg-fuchsia-200 ease-in duration-200 "
              to={`/category/${course.id}`}
            >
              {course.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSideNav;
