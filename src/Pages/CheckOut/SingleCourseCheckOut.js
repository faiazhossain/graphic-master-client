import React from "react";

const SingleCourseCheckOut = ({ singleCourse }) => {
  const { name, picture } = singleCourse;
  return (
    <div className="flex justify-center ">
      <div className="stat-figure text-secondary"></div>
      <div className="stat flex flex-col items-center ">
        <div className="text-4xl mb-2"> 🎉🎉🎉</div>
        <div className="stat-title">Congratulations you have purchased</div>
        <div className="stat-value text-secondary">{name}</div>
        <img src={picture} className="w-96 mt-12" alt="" />
      </div>
    </div>
  );
};

export default SingleCourseCheckOut;
