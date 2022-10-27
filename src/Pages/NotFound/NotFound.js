import React from "react";
import { Link } from "react-router-dom";
import notFound from "./not found 404.png";
const NotFound = () => {
  return (
    <div>
      <div className="flex items-center flex-col mt-6">
        <img src={notFound} className="w-96" alt="" />
        <h2 className="text-4xl mt-10 flex items-center ">
          <div className="mr-4">Go Back to</div>
          <Link to="/">
            <button className="btn btn-secondary">Home</button>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
