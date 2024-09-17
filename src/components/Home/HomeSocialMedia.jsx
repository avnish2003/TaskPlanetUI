import React from "react";

import Instagram from "../../images/Instagram.png";
import Twitter from "../../images/twitter.png";
import Telegram from "../../images/telegram.png";
import Youtube from "../../images/youtube.png";
import Facebook from "../../images/facebook.png";
import LinkedIn from "../../images/linkedin.webp";
import socialMediaTaskImg from "../../images/socialMediaTask.png"

const HomeSocialMedia = () => {
  return (
    <div className="flex gap-3 flex-col mx-3">
      <div className="home_social_heading ">
        <h3 className="text-md md:text-lg font-medium tracking-wider">
          Social Media Task
        </h3>
      </div>
      <div className="home_social_platforms grid grid-cols-3 gap-4">
        <div className="home_social_platform border-2 rounded-md px-3 md:px-8 py-2 relative">
          <span className="bg-green-600 text-white rounded-lg px-1 text-xs font-medium absolute top-[-10px] right-[0]">
            + 300
          </span>
          <div className="icon flex flex-col items-center justify-center gap-2">
            <img className="w-[45px]" src={Instagram} alt="Instagram" />
            <p className="text-sm md:text-lg tracking-wide">Instagram</p>
          </div>
        </div>
        <div className="home_social_platform border-2 rounded-md px-3 md:px-8 py-2 relative">
          <span className="bg-green-600 text-white rounded-lg px-1 text-xs font-medium absolute top-[-10px] right-[0]">
            + 220
          </span>
          <div className="icon flex flex-col items-center justify-center gap-2">
            <img className="w-[80px]" src={Facebook} alt="Facebook" />
            <p className="text-sm md:text-lg tracking-wide">Facebook</p>
          </div>
        </div>
        <div className="home_social_platform border-2 rounded-md px-3 md:px-8 py-2 relative">
          <span className="bg-green-600 text-white rounded-lg px-1 text-xs font-medium absolute top-[-10px] right-[0]">
            + 85
          </span>
          <div className="icon flex flex-col items-center justify-center">
            <img className="w-[45px]" src={Twitter} alt="Twitter" />
            <p className="text-sm md:text-lg tracking-wide">X</p>
          </div>
        </div>
        <div className="home_social_platform border-2 rounded-md px-3 md:px-8 py-2 relative">
          <span className="bg-green-600 text-white rounded-lg px-1 text-xs font-medium absolute top-[-10px] right-[0]">
            + 212
          </span>
          <div className="icon flex flex-col items-center justify-center">
            <img className="w-[45px]" src={Youtube} alt="Youtube" />
            <p className="text-sm md:text-lg tracking-wide">Youtube</p>
          </div>
        </div>
        <div className="home_social_platform border-2 rounded-md px-3 md:px-8 py-2 relative">
          <span className="bg-green-600 text-white rounded-lg px-1 text-xs font-medium absolute top-[-10px] right-[0]">
            + 60
          </span>
          <div className="icon flex flex-col items-center justify-center">
            <img className="w-[45px]" src={Telegram} alt="Telegram" />
            <p className="text-sm md:text-lg tracking-wide">Telegram</p>
          </div>
        </div>
        <div className="home_social_platform border-2 rounded-md px-3 md:px-8 py-2 relative">
          <span className="bg-green-600 text-white rounded-lg px-1 text-xs font-medium absolute top-[-10px] right-[0]">
            + 30
          </span>
          <div className="icon flex flex-col items-center justify-center">
            <img className="w-[50px]" src={LinkedIn} alt="LinkedIn" />
            <p className="text-sm md:text-lg tracking-wide">LinkedIn</p>
          </div>
        </div>
      </div>

      <div className="socialMediaTaskImg">
        <img className=" rounded-xl" src={socialMediaTaskImg} alt="SocailMedia" />
      </div>
    </div>
  );
};

export default HomeSocialMedia;
