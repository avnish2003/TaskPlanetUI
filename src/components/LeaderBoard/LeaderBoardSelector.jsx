import React from 'react';

const LeaderBoardSelector = ({ selectedOption, handleSelect }) => (
  <div className="leader_board_selector">
    <div className="selector_leaderBoard flex justify-between w-full mx-auto my-0 py-2 px-1 border-2 rounded-[20px] border-yellow-400">
      <div
        className={`option | py-3 px-2 md:py-3 md:px-6 ${
          selectedOption === "daily" ? "selected" : ""
        }`}
        onClick={() => handleSelect("daily")}
      >
        Daily
      </div>
      <div
        className={`option | py-3 px-2 md:py-3 md:px-6 ${
          selectedOption === "weekly" ? "selected" : ""
        }`}
        onClick={() => handleSelect("weekly")}
      >
        Weekly
      </div>
      <div
        className={`option | py-3 px-2 md:py-3 md:px-6 ${
          selectedOption === "monthly" ? "selected" : ""
        }`}
        onClick={() => handleSelect("monthly")}
      >
        Monthly
      </div>
    </div>
  </div>
);

export default LeaderBoardSelector;
