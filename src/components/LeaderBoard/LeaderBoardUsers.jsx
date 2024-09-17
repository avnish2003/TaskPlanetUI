import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LeaderBoardCrown from "../../images/crown.png";
import LeaderBoardGiftImg from "../../images/gift.png";
import ReplayIcon from "@mui/icons-material/Replay";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const LeaderBoardUsers = ({ users, handleReload }) => (
  <div className="leader_board_users flex justify-between px-4">
    <div className="w-1/6 h-20">
      <img
        className="w-full h-full object-cover"
        src={LeaderBoardGiftImg}
        alt="Gift Img"
      />
    </div>
    <div className="leader_board_users_all_users_container w-4/5 ">
      <div className="leader_board_users_all_users flex justify-center items-center relative">
        <div className="leader_board_users_user mt-20">
          <div className="flex flex-col items-center justify-center opacity-70">
            <p className="text-xs text-green-600 font-bold">2</p>
            <ArrowDropDownIcon sx={{ fontSize: "32px", color: "#4B5563" }} />
            <img
              className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-full  "
              src={users[1].image}
              alt=""
            />

            <div className="text-md font-medium ">{users[1].name}</div>
            <div className="text-sm font-medium text-green-600">
              {users[1].number}
            </div>
            <div className="text-sm font-medium text-yellow-500 tracking-wider">
              Prize: &#8377; {users[1].prize}
            </div>
          </div>
        </div>
        <div className="leader_board_users_user flex z-10  mx-[-15px] ">
          <div className="flex flex-col items-center justify-center">
            <p className="text-xs text-green-600 font-bold">1</p>
            <img className="w-8 h-8 " src={LeaderBoardCrown} alt="Crown" />
            <img
              className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-full  border-4 border-green-600"
              src={users[0].image}
              alt=""
            />

            <div className="text-md font-medium ">{users[0].name} </div>
            <div className="text-sm font-medium text-green-600">
              {users[0].number}
            </div>
            <div className="text-sm font-medium text-yellow-500 tracking-wider">
              Prize: &#8377; {users[0].prize}
            </div>
          </div>
        </div>
        <div className="leader_board_users_user mt-20 opacity-70">
          <div className="flex flex-col items-center justify-center">
            <p className="text-xs text-green-600 font-bold">3</p>
            <ArrowDropDownIcon sx={{ fontSize: "32px", color: "#4B5563" }} />
            <img
              className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-full  "
              src={users[2].image}
              alt="img"
            />

            <div className="text-md font-medium ">{users[2].name}</div>
            <div className="text-sm font-medium text-green-600">
              {users[2].number}
            </div>
            <div className="text-sm font-medium text-yellow-500 tracking-wider">
              Prize: &#8377; {users[2].prize}
            </div>
          </div>
        </div>
      </div>
      <div className="leader_board_users_reload_icon text-center my-4 tracking-wide ">
        <div className="flex items-cent gap-3 justify-center text-red-500 font-medium">
          <QueryBuilderIcon sx={{ color: "#EF4444" }} />
          <span>Ends in 03h 47m 40s</span>
        </div>
      </div>
    </div>
    <div className="leader_board_users_time_img w-1/6">
      <ReplayIcon
        className="cursor-pointer"
        onClick={handleReload}
        sx={{ fontSize: "60px", color: "#16A34A" }}
      />
    </div>
  </div>
);

export default LeaderBoardUsers;
