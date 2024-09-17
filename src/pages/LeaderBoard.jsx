import React, { useState } from "react";
import "../index.css";
import LeaderBoardHeader from "../components/LeaderBoard/LeaderBoardHeader";
import LeaderBoardSelector from "../components/LeaderBoard/LeaderBoardSelector";
import LeaderBoardUsers from "../components/LeaderBoard/LeaderBoardUsers";
import LeaderBoardUserDetail from "../components/LeaderBoard/LeaderBoardUserDetail";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";

const LeaderBoard = ({ users,setSelectedUser }) => {
  const [selectedOption, setSelectedOption] = useState("daily");
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const displayedUsers = showMore ? users : users.slice(0, 5);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleReload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="leader_board_content flex items-center justify-center py-[70px]">
      <Navbar />
      <div className="flex flex-col gap-4 border-2 mx-2 my-5 md:m-4 p-2 md:p-7 rounded-3xl bg-white w-full md:w-[600px]">
        <LeaderBoardHeader />
        <LeaderBoardSelector
          selectedOption={selectedOption}
          handleSelect={handleSelect}
        />
        <LeaderBoardUsers users={users} handleReload={handleReload} />
        <div className="leader_board_user_detail_container flex flex-col gap-3">
          {loading ? (
            <div className="flex justify-center items-center w-full h-32">
              <Spinner />
            </div>
          ) : (
            <LeaderBoardUserDetail users={displayedUsers} setSelectedUser = {setSelectedUser} />
          )}
          {users.length > 5 && (
            <div className="mt-4 flex justify-center">
              <button
                className="px-4 py-2 bg-green-600 hover:bg-green-400 text-white rounded-lg"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
