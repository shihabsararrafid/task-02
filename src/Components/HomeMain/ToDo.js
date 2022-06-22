import React, { useState } from "react";
import small from "./../../Images/small.png";
import uncheck from "./../../Images/Icon_Vector_Uncheck.png";
import check from "./../../Images/Icon_Vector_Check.png";
const ToDo = () => {
  const [select, setSelect] = useState(false);
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
      <section className="select">
        <div className="flex  items-center  mt-4">
          <div className="flex w-[540px] ">
            <img
              onClick={() => setSelect(!select)}
              className="w-[26px] h-[26px]"
              src={`${select ? check : uncheck}`}
              alt=""
            />
            <span className="font-bold block ml-2">Select All</span>
          </div>
          <div>
            <button className="flex h-[40px] ml-3  text-white items-center bg-gradient-to-r from-[#FF7594] to-[#FF7C65] py-1 px-3 rounded-md ">
              <img src={small} className="" alt="" />
              <span> Done</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToDo;
