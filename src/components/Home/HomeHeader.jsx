import React from "react";
import LeaderBoardMainLogo from "../../images/mainLogo.webp";

const HomeHeader = () => (
  
    <div className="home_header flex items-center justify-between px-3 flex-wrap">
      <h1 className="font-semibold text-sm md:text-lg">Home</h1>
      <div className="flex items-center justify-between gap-2">
        <button className="px-2 md:px-6 py-1 border-2 text-red-700 rounded-lg text-xs md:text-sm tracking-wider font-medium">
          3982
        </button>
        <button className="px-2 md:px-6 py-1 border-2 text-green-700 rounded-lg text-xs md:text-sm tracking-wider font-medium flex">
          &#8377; 2900.00
        </button>
        <button className="px-2 md:px-6 py-1 border-2 text-green-700 rounded-lg text-xs md:text-sm tracking-wider font-medium flex">
          &#8377; 1000
        </button>
        <img
          className="w-8 h-8 md:w-12 md:h-12 object-cover rounded-full border-2"
          src={LeaderBoardMainLogo}
          alt="TaskPlanet"
        />
      </div>
    </div>
);

export default HomeHeader;
