import React from "react";

// import "./Styles/TopNavbar.css";
import { FaPhone, FaVideo } from "react-icons/fa";

const TopNavbar = ({ data }) => {
  return (
    <div className="top__container">
      <div className="topnavbar__details">
        {data.map((data) => {
          return (
            <>
              <img src={data.image} alt={data.name} />
              <p>{data.name}</p>
            </>
          );
        })}
      </div>
      <div className="topnavbar__icons">
        <FaVideo />
        <FaPhone />
      </div>
    </div>
  );
};

export default TopNavbar;
