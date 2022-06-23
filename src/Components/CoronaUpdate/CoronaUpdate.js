import React from "react";
import getDate from "../Hooks/GetDate";
import corona from "./../../Images/Svg_sample2.png";
const CoronaUpdate = () => {
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
    <div className="corona-update p-6 mr-5 rounded-lg bg-white">
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
      <div className="mt-10">
        <img className="w-[50%] h-[70%] object-cover" src={corona} alt="" />
      </div>
    </div>
  );
};

export default CoronaUpdate;
