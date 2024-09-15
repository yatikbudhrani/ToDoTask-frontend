import React from "react";
import "./Navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="first">
          <p>CRON JOB</p>
        </div>
        <div className="second">
          <div className="logo">TASK SCHEDULER</div>
        </div>
        <div className="third">
          Login / Sign Up
          <FaRegUserCircle />
        </div>
      </div>
    </>
  );
}

export default Navbar;
