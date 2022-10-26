import React from "react";

const CourseSummaryCard = ({ singleCourse }) => {
  console.log(singleCourse);
  const { picture, name, about, instructor } = singleCourse;
  return (
    <div className="card lg:card-side bg-base-100 my-10 p-10 shadow-xl">
      <figure>
        <img src={picture} className="lg:w-96 w-auto" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{about}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default CourseSummaryCard;
