import React from "react";
import sugar from "./../../Images/Icon_Blood_sugar.png";
import sugarDark from "./../../Images/Frame 2846 (3).png";
import pulse from "./../../Images/Icon_Heart.png";
import pulseDark from "./../../Images/Frame 2846 (2).png";
import saturation from "./../../Images/Icon_bubble.png";
import saturationDark from "./../../Images/Frame 2846 (1).png";
import pressure from "./../../Images/Icon_Blood_pressure.png";
import pressureDark from "./../../Images/Frame 2846.png";
import vector from "./../../Images/Vector.png";
import vectorDark from "./../../Images/Vector (4).png";
const HealthParam = ({ isDark, setDark }) => {
  return (
    <div className="grid grid-cols-4 mt-[28px] gap-x-[30px]">
      <div
        className={`${isDark ? "bg-[#2C2221]" : "bg-white"} ${
          isDark ? "text-white" : "text-black"
        } w-[157px] shadow-2xl rounded-md  p-3 `}
      >
        <img className="" src={`${isDark ? pulseDark : pulse}`} alt="" />
        <h1 className="text-[12px] font-bold ">Pulse Count</h1>
        <p className="font-semibold">60 bpm</p>
        <div className="flex items-center">
          <img
            className="w-[9px] h-[6px]"
            src={`${isDark ? vectorDark : vector}`}
            alt=""
          />
          <p
            className={`text-[12px] ml-2 ${
              isDark ? "text-white" : "text-[#03922B]"
            }  font-semibold`}
          >
            Normal
          </p>
        </div>
      </div>
      <div
        className={`${isDark ? "bg-[#2C2221]" : "bg-white"} ${
          isDark ? "text-white" : "text-black"
        }  w-[157px] shadow-2xl rounded-md  p-3 `}
      >
        <img src={`${isDark ? pressureDark : pressure}`} alt="" />
        <h1 className="text-[12px] font-bold ">Blood Pressure</h1>
        <p className="font-semibold">110/70 mmHg</p>
        <div className="flex items-center">
          <img
            className="w-[9px] h-[6px]"
            src={`${isDark ? vectorDark : vector}`}
            alt=""
          />
          <p
            className={`text-[12px] ml-2 ${
              isDark ? "text-white" : "text-[#82AB0D]"
            }  font-semibold`}
          >
            Slightly higher
          </p>
        </div>
      </div>
      <div
        className={`${isDark ? "bg-[#2C2221]" : "bg-white"} ${
          isDark ? "text-white" : "text-black"
        } w-[157px] shadow-2xl rounded-md  p-3 `}
      >
        <img src={`${isDark ? saturationDark : saturation}`} alt="" />
        <h1 className="text-[12px] font-bold ">Oxygen Saturation</h1>
        <p className="font-semibold">97 %</p>
        <div className="flex items-center">
          <img
            className="w-[9px] h-[6px]"
            src={`${isDark ? vectorDark : vector}`}
            alt=""
          />

          <p
            className={`text-[12px] ml-2 ${
              isDark ? "text-white" : "text-[#82AB0D]"
            }  font-semibold`}
          >
            Slightly higher
          </p>
        </div>
      </div>
      <div
        className={`${isDark ? "bg-[#2C2221]" : "bg-white"} ${
          isDark ? "text-white" : "text-black"
        } w-[157px] shadow-2xl rounded-md  p-3 `}
      >
        <img src={`${isDark ? sugarDark : sugar}`} alt="" />
        <h1 className="text-[12px] font-bold ">Glucose Count</h1>
        <p className="font-semibold">100 mm/dL</p>
        <div className="flex items-center">
          <img
            className="w-[9px] h-[6px]"
            src={`${isDark ? vectorDark : vector}`}
            alt=""
          />
          <p
            className={`text-[12px] ml-2 ${
              isDark ? "text-white" : "text-[#03922B]"
            }  font-semibold`}
          >
            Normal
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthParam;
