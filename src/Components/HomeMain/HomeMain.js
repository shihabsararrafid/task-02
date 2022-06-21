import React from "react";
import BannerPart from "./BannerPart";
import HealthParam from "./HealthParam";

const HomeMain = () => {
  return (
    <div className="w-[718px]  ml-[60px] mt-[104px]">
      <BannerPart></BannerPart>
      <HealthParam></HealthParam>
    </div>
  );
};

export default HomeMain;
