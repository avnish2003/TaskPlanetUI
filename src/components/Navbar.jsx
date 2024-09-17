import React from "react";
import { Link, useLocation } from "react-router-dom";
import CottageIcon from "@mui/icons-material/Cottage";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

const Navbar = () => {
  const location = useLocation();
  
  const getNavItemClass = (path) => {
    return location.pathname === path ? "nav_item active" : "nav_item";
  };

  return (
    <div className="navbar_container">
      <div className="navbar_content flex justify-between bg-blue-400 md:rounded-xl w-full p-2">
        <Link to={"/"} className={getNavItemClass("/")}>
          <CottageIcon sx={{ fontSize: "35px", color: "#ffffff" }} />
          <span className="nav_label">Home</span>
        </Link>
        <Link to={"/"} className={getNavItemClass("/calendar")}>
          <CalendarMonthIcon sx={{ fontSize: "35px", color: "#ffffff" }} />
          <span className="nav_label">Calendar</span>
        </Link>
        <Link to={"/"} className={getNavItemClass("/add")}>
          <AddIcon sx={{ fontSize: "35px", color: "#ffffff" }} />
          <span className="nav_label">Add</span>
        </Link>
        <Link to={"/"} className={getNavItemClass("/settings")}>
          <SettingsIcon sx={{ fontSize: "35px", color: "#ffffff" }} />
          <span className="nav_label">Settings</span>
        </Link>
        <Link to={"/leader-board"} className={getNavItemClass("/leader-board")}>
          <LeaderboardIcon sx={{ fontSize: "35px", color: "#ffffff" }} />
          <span className="nav_label">Leaderboard</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
