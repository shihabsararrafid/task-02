import React from "react";
import sugar from "./../../Images/Icon_Blood_sugar.png";
import pulse from "./../../Images/Icon_Heart.png";
import saturation from "./../../Images/Icon_bubble.png";
import pressure from "./../../Images/Icon_Blood_pressure.png";
import vector from "./../../Images/Vector.png";
const HealthParam = () => {
  return (
    <div className="grid grid-cols-4 mt-[28px] gap-x-[30px]">
      <div className="bg-white w-[157px] shadow-2xl rounded-md h-[157px] p-3 ">
        <img className="" src={pulse} alt="" />
        <h1 className="text-[12px] font-bold ">Pulse Count</h1>
        <p className="font-semibold">60 bpm</p>
        <div className="flex items-center">
          <img className="w-[9px] h-[6px]" src={vector} alt="" />
          <p className="text-[12px] ml-2 text-[#03922B] font-semibold">
            Normal
          </p>
        </div>
      </div>
      <div className="bg-white shadow-2xl rounded-md w-[157px] h-[157px] p-3 ">
        <img src={pressure} alt="" />
        <h1 className="text-[12px] font-bold ">Blood Pressure</h1>
        <p className="font-semibold">110/70 mmHg</p>
        <div className="flex items-center">
          <img className="w-[9px] h-[6px]" src={vector} alt="" />
          <p className="text-[12px] text-[#82AB0D] font-semibold ml-2">
            Slightly higher
          </p>
        </div>
      </div>
      <div className="bg-white shadow-2xl rounded-md w-[157px] h-[157px] p-3 ">
        <img src={saturation} alt="" />
        <h1 className="text-[12px] font-bold ">Oxygen Saturation</h1>
        <p className="font-semibold">97 %</p>
        <div className="flex items-center">
          <img className="w-[9px] h-[6px]" src={vector} alt="" />
          <p className="text-[12px] text-[#82AB0D] font-semibold ml-2">
            Slightly higher
          </p>
        </div>
      </div>
      <div className="bg-white shadow-2xl rounded-md w-[157px] h-[157px] p-3 ">
        <img src={sugar} alt="" />
        <h1 className="text-[12px] font-bold ">Glucose Count</h1>
        <p className="font-semibold">100 mm/dL</p>
        <div className="flex items-center">
          <img className="w-[9px] h-[6px]" src={vector} alt="" />
          <p className="text-[12px] ml-2 text-[#03922B] font-semibold">
            Normal
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthParam;
