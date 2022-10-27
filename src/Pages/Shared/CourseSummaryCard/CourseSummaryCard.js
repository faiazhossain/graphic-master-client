import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
const CourseSummaryCard = ({ singleCourse }) => {
  console.log(singleCourse);
  const { picture, name, about, instructor, price } = singleCourse;
  return (
    <div className="card lg:card-side bg-base-100 my-10 p-10 shadow-xl">
      <figure>
        <img src={picture} className="lg:w-96 w-auto" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{about}</p>

        <div className="card-actions justify-between">
          <div className="stat-value text-primary flex items-center">
            <FaDollarSign className="w-4"></FaDollarSign>
            {price}
          </div>
          <Link to="/checkout">
            <button className="btn btn-primary">Buy This Course</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSummaryCard;
