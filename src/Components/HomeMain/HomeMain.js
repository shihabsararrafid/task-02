import React from "react";
import BannerPart from "./BannerPart";
import HealthParam from "./HealthParam";
import ToDo from "./ToDo";

const HomeMain = ({ isDark }) => {
  return (
    <div className="  home-main   ml-[60px] ">
      <BannerPart></BannerPart>
      <HealthParam isDark={isDark}></HealthParam>
    </div>
  );
};

export default HomeMain;
