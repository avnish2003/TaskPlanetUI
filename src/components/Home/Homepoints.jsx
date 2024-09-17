import React from "react";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import Banner from "../../images/weeklyLeaderBoard.png";

const Homepoints = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="home_points_announcement mx-3">
          <div className="flex items-center bg-yellow-400  justify-center gap-3 text-white font-medium rounded-md">
            <CampaignRoundedIcon sx={{ fontSize: "30px", color: "#ffffff" }} />
            <span className="text-sm md:text-md">
              TaskPlanet. Get 10 Points on every referrals
            </span>
          </div>
        </div>
        <div className="home_points_money mx-3 flex justify-around items-center flex-wrap gap-3">
          <div className="home_points_money_wallet p-2 rounded-md border-2 ">
            <p className="text-xs text-gray-300">Wallet</p>
            <div className="flex items-center justify-between gap-3 md:gap-6 ">
              <p className="text-green-500 text-sm font-medium">
                &#8377; 2875.00
              </p>
              <WalletRoundedIcon sx={{ fontSize: "25px", color: " #10B981" }} />
            </div>
          </div>
          <div className="home_points_money_Earnings p-2 rounded-md border-2">
            <p className="text-xs text-gray-300">Earnings</p>
            <div className="flex items-center justify-between gap-3 md:gap-6">
              <p className="text-blue-500 text-sm font-medium">
                &#8377; 2875.00
              </p>
              <AttachMoneyRoundedIcon
                sx={{ fontSize: "25px", color: " #3B82F6" }}
              />
            </div>
          </div>
          <div className="home_points_money_Referrals p-2 rounded-md border-2">
            <p className="text-xs text-gray-300">Earnings</p>
            <div className="flex items-center justify-between gap-3 md:gap-8">
              <p className="text-yellow-400 text-sm font-medium ">2417</p>
              <ShareRoundedIcon sx={{ fontSize: "25px", color: " #F59E0B" }} />
            </div>
          </div>
          <div className="home_points_banner | flex gap-3 flex-col">
            <div className="home_points_banner_img">
              <img
                className="rounded-xl w-full h-46 object-cover "
                src={Banner}
                alt="Banner"
              />
            </div>
            <div className="home_points_banner_dots flex items-center justify-center gap-3">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Homepoints;
