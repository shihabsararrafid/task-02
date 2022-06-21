import React from "react";
import sugar from "./../../Images/Icon_Blood_sugar.png";
import pulse from "./../../Images/Icon_Heart.png";
import saturation from "./../../Images/Icon_bubble.png";
import pressure from "./../../Images/Icon_Blood_pressure.png";
const HealthParam = () => {
  return (
    <div className="grid grid-cols-4 gap-x-[30px]">
      <div className="bg-white ">
        <img src={pulse} alt="" />
        <h1>Blood Pressure</h1>
      </div>
      <div className="bg-white ">
        <img src={pressure} alt="" />
      </div>
      <div className="bg-white ">
        <img src={saturation} alt="" />
      </div>
      <div className="bg-white ">
        <img src={sugar} alt="" />
      </div>
    </div>
  );
};

export default HealthParam;
