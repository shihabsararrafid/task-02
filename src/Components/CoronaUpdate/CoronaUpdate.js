import React from "react";
import getDate from "../Hooks/GetDate";
import corona from "./../../Images/Svg_sample2.png";
const CoronaUpdate = ({ isDark }) => {
  const [finalDate] = getDate();
  const day = new Date(finalDate);
  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  var today = new Date().toLocaleTimeString();
  console.log(today);
  return (
    <div
      className={`corona-update px-6 py-10 mr-5
    ${isDark ? "bg-[#2C2221]" : "bg-white"} ${
        isDark ? "text-white" : "text-black"
      }
    rounded-lg `}
    >
      <div className="flex items-center font-semibold justify-between">
        <h1>Covid 19 Updates</h1>
        <div>
          <p>{finalDate}</p>
          <div className="text-[#E1E0E0] font-normal">
            <span>{dayArray[day.getDay()]}</span>
            <span>{"    " + today}</span>
          </div>
        </div>
      </div>
      <div className="mt-10 flex">
        <img
          className="w-[50%] imgcorona h-[70%] object-cover"
          src={corona}
          alt=""
        />
        <div className="w-[50%] infection text-white font-medium rounded-lg px-5 py-8 text-center bg-gradient-to-r from-[#FF7594] to-[#FF7C65]">
          <p>Infection Number </p>
          <p className="text-4xl  text-white ">2000</p>
          <p>Infection Rate </p>
          <p className="text-4xl text-white">11%</p>
        </div>
      </div>
    </div>
  );
};

export default CoronaUpdate;
