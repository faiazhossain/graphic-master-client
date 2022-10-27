import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import background from "../../images/background pic.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div className="relative home-text">
      <img src={background} className="home-img h-screen w-screen" alt="" />
      <h3 className="absolute lg:inset-1/4 inset-0  top-0 text-4xl md:text-4xl lg:text-6xl text-white">
        Master Graphic Design
        <small className="block mt-5 text-xl md:text-2xl lg:text-3xl ">
          Here we will teach you the most important softwares for "Graphic
          Design". You will become so confident after finishing the tutorials.
          Don't waste your time let's get{" "}
          <Link to="/courses">
            <button className="btn btn-outline btn-info">Started</button>
          </Link>
        </small>
      </h3>
    </div>
  );
};

export default Home;
