import React from "react";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import StarsIcon from "@mui/icons-material/Stars";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const UserDetail = ({ user, onClose }) => {
  if (!user) {
    return <p>No user selected</p>;
  }
  return (
    <div className=" fixed inset-0  w-full h-screen    flex items-center justify-center bg-black-opacity z-[500] ">
      <div className="user_detail_container border-2 rounded-lg px-7 py-4 | flex gap-3 flex-col relative bg-white">
        <div className="absolute right-[30px] cursor-pointer" onClick={onClose}>
          <CancelRoundedIcon sx={{ fontSize: "30px", color: "#000000 " }} />
        </div>
        <div className="user_detail |  flex flex-col gap-3 ">
          <div className="user_detail_img | flex items-center justify-center ">
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>

          <div className="user_detail_bio flex flex-col items-center gap-1">
            <h1 className="text-sm font-bold">{user.name}</h1>
            <p className="text-sm">{user.email}</p>
            <div className="flex items-center gap-1 justify-center">
              <span>
                {user.gender === "Male" ? (
                  <MaleIcon sx={{ color: "#1E90FF" }} />
                ) : (
                  <FemaleIcon sx={{ color: "#FF69B4" }} />
                )}
              </span>
              <p className="bg-blue-600 text-white px-3 rounded-md text-sm font-medium">
                {user.gender}
              </p>
            </div>
          </div>

          <div className="user_detail_member | flex  gap-2   items-center justify-center  rounded-md">
            <div className="border-2 px-2 border-gray-300 rounded-md font-medium">
              <CardMembershipIcon sx={{ fontSize: "18px", color: "#FF6347" }} />
              <span className="text-xs ml-2">Member Since Sep 2024</span>
            </div>
          </div>
        </div>

        <div className="user_detail_dashboard flex flex-col gap-3">
          <span className="px-4 py-1 bg-blue-500 text-white w-56 flex items-center gap-3 rounded-lg ">
            <LeaderboardIcon sx={{ fontSize: "30px", color: "#ffffff " }} />
            <span className="text-sm font-normal">LeaderBoard Statistics</span>
          </span>

          <div className="user_detail_points flex flex-col  gap-3">
            <div className="daily flex justify-between items-center w-[400px]">
              <p className="px-4 py-1 font-medium text-white rounded-md bg-orange-400">
                Daily
              </p>
              <p className="px-4 py-1 border-2 rounded-md">Points : 77</p>
              <p className="px-4 py-1 border-2 border-orange-400 flex gap-1 items-center rounded-md">
                <StarsIcon sx={{ fontSize: "25px", color: "#2563eb" }} />
                <span>5</span>
              </p>
            </div>
            <div className="weekly flex justify-between items-center w-[400px]">
              <p className="px-4 py-1 font-medium text-white rounded-md bg-orange-400">
                Weekly
              </p>
              <p className="px-4 py-1 border-2 rounded-md">Points : 487</p>
              <p className="px-4 py-1 border-2 border-orange-400 flex gap-1 items-center rounded-md">
                <StarsIcon sx={{ fontSize: "25px", color: "#2563eb" }} />
                <span>9</span>
              </p>
            </div>
            <div className="monthly flex justify-between items-center w-[400px]">
              <p className="px-4 py-1 font-medium text-white rounded-md bg-orange-400">
                Monthly
              </p>
              <p className="px-4 py-1 border-2 rounded-md">Points : 1443</p>
              <p className="px-4 py-1 border-2 border-orange-400 flex gap-1 items-center rounded-md">
                <StarsIcon sx={{ fontSize: "25px", color: "#2563eb" }} />
                <span>5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
