import React from "react";
import pic1 from "./../../Images/Svg_sample1.svg";
import "./BannerPart.css";
const BannerPart = () => {
  return (
    <div className="w-full flex px-[16px] justify-between items-center text-white banner h-[213px]">
      <div>
        <img src={pic1} alt="" />
      </div>
      <div>
        <h1 className="text-2xl">Hello, Mary Jane!</h1>
        <p className="text-base">Stay Up-to-Date with your appointments.</p>
        <p className="text-base">You Have No pending Reports</p>
      </div>
    </div>
  );
};

export default BannerPart;
