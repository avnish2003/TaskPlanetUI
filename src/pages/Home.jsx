import React from "react";
import Navbar from "../components/Navbar";

import HomeHeader from "../components/Home/HomeHeader";
import Homepoints from "../components/Home/Homepoints";
import HomeSocialMedia from "../components/Home/HomeSocialMedia";


const Home = () => {
  return (
    <div>
      <div className="  leader_board_content flex items-center justify-center py-[70px]">
        <Navbar />
        <div className="flex flex-col gap-4 border-2 mx-2 my-5 md:m-4 p-2 md:p-7 rounded-3xl bg-white w-full md:w-[600px]">
        <HomeHeader />
        <Homepoints />
        <HomeSocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Home;
