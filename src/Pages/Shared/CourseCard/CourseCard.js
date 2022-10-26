import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { course_id, id, name, picture, about } = course;
  console.log(course);
  return (
    <div>
      <div className="card bg-purple-400 glass pt-2 hover:bg-purple-500 ease-in duration-200">
        <figure>
          <img src={picture} className="w-11/12" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {about.length > 150 ? (
              <p>
                {about.slice(0, 150) + "..."}{" "}
                <Link
                  className="text-fuchsia-200"
                  to={`/category/${course_id}`}
                >
                  Read more!
                </Link>
              </p>
            ) : (
              <p>{about}</p>
            )}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
