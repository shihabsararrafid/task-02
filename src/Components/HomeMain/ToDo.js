import React from "react";
import small from "./../../Images/small.png";
const ToDo = () => {
  return (
    <div className="w-full h-[460px] mt-[37px] bg-white p-4">
      <h1 className="font-semibold text-base ">To Do List </h1>
      <div className="text-area flex">
        <textarea
          name=""
          id=""
          cols="65"
          rows="4"
          className="border-[2px] focus:border-[#FF7978] outline-0 border-[#EDEBEB]"
        ></textarea>
        {/* bg-gradient-to-r from-[#FF7594] to-[#FF7C65] */}
        <button className="flex h-[40px] ml-3  text-white items-center bg-gradient-to-r from-[#FF7594] to-[#FF7C65] py-1 px-3 rounded-md ">
          <img src={small} className="" alt="" />
          <span> Add</span>
        </button>
      </div>
    </div>
  );
};

export default ToDo;
