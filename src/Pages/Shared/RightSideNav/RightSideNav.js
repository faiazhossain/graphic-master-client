import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
const RightSideNav = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <ul className="menu ml-4 bg-base-100 w-44 rounded-box">
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
  );
};

export default RightSideNav;
