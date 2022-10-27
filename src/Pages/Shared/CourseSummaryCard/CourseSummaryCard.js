import React from "react";
import { FaDollarSign, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const options = {
  orientation: "potrait",
  unit: "in",
  format: [15, 15],
};

const CourseSummaryCard = ({ singleCourse }) => {
  console.log(singleCourse);
  const { picture, name, about, instructor, price } = singleCourse;
  return (
    <div className="card bg-base-100 my-10 p-10 shadow-xl">
      <h2 className="lg:text-6xl md:text-4xl text-2xl shadow-lg bg-slate-50 rounded-xl p-2 flex justify-center gap-6">
        <div>{name}</div>
        <div className="text-info">
          <Pdf
            targetRef={ref}
            filename="code-example.pdf"
            options={options}
            x={1}
            y={1}
            scale={1}
          >
            {({ toPdf }) => (
              <button onClick={toPdf}>
                <FaDownload></FaDownload>
              </button>
            )}
          </Pdf>
        </div>
      </h2>

      <div className="card lg:card-side bg-base-100 my-10 p-10 shadow-xl">
        <figure>
          <img src={picture} className="lg:w-96 w-auto" alt="Album" />
        </figure>
        <div className="card-body" ref={ref}>
          <h2 className="card-title">{name}</h2>
          <p>{about}</p>

          <div className="stat-value text-slate-600 text-xl flex items-center">
            <small className="text-slate-400 mr-2">Instructor:</small>
            {instructor}
          </div>
          <div className="card-actions justify-between">
            <div className="stat-value text-primary flex items-center">
              <small className="text-slate-400 mr-2">Price:</small>
              <FaDollarSign className="w-4"></FaDollarSign>
              {price}
            </div>
            <Link to="/checkout">
              <button className="btn btn-warning">Get premium access</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSummaryCard;
