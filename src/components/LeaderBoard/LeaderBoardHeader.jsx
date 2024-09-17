import React from "react";
import LeaderBoardMainLogo from "../../images/mainLogo.webp";

const LeaderBoardHeader = () => (
  
    <div className="leader_board flex items-center justify-between px-3">
      <h1 className="font-semibold text-sm md:text-lg">Leader Board</h1>
      <div className="flex items-center justify-between gap-2">
        <button className="px-3 md:px-6 py-1 border-2 text-red-700 rounded-lg text-sm tracking-wider font-medium">
          3982
        </button>
        <button className="px-3 md:px-6 py-1 border-2 text-green-700 rounded-lg text-sm tracking-wider font-medium flex">
          &#8377; 2870.00
        </button>
        <img
          className="w-12 h-12 object-cover rounded-full border-2"
          src={LeaderBoardMainLogo}
          alt="TaskPlanet"
        />
      </div>
    </div>
);

export default LeaderBoardHeader;
