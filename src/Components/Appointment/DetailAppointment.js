import React from "react";
import "./Appointment.css";
const DetailAppointment = ({ isDark }) => {
  // #413837
  return (
    <div
      className={`detail-appointments ${
        isDark ? "text-white" : "text-black"
      }    rounded-lg p-[16px] mr-5 ${isDark ? "bg-[#2C2221]" : "bg-white"} `}
    >
      <h1 className="text-base  font-semibold">Upcoming Appointments</h1>
      <div className="flex flex-col gap-y-[24px]">
        <div className="mt-2 flex relative justify-center items-center ">
          <div className="flex justify-center items-center flex-col absolute top-10 left-0">
            <div className="w-[10px] mb-2   h-[10px]  rounded-full bg-[#FF9898]"></div>

            <div className="border-[.5px]  h-[90px] w-[0px] border-[#EDEBEB]"></div>
          </div>
          <div
            className={` ${
              isDark ? "bg-[#413837]" : "bg-[#FFF5F5]"
            }  singleAppointments  w-[380px] rounded-lg h-[101px]`}
          >
            <div className="w-[70px] text-[#D2D5D6] font-semibold p-[8px] h-full bg-[#FFFFFF] border-[1px] text-[20px] !border-[#EDEBEB]  rounded-xl">
              <span className="text-[13px]"> 2022</span> <br />{" "}
              <span className="text-black">24 </span>
              <br />
              <span> June</span>
            </div>
          </div>
        </div>
        <div className="mt-2  flex relative justify-center items-center ">
          <div className="flex justify-center items-center flex-col absolute top-10 left-0">
            <div className="w-[10px] mb-2   h-[10px]  rounded-full bg-[#FFF598]"></div>

            <div className="border-[.5px]  h-[90px] w-[0px] border-[#EDEBEB]"></div>
          </div>
          <div
            className={` ${
              isDark ? "bg-[#413837]" : "bg-[#FFF5F5]"
            }  singleAppointments  w-[380px] rounded-lg h-[101px]`}
          >
            <div className="w-[70px] text-[#D2D5D6] font-semibold p-[8px] h-full bg-[#FFFFFF] border-[1px] text-[20px] !border-[#EDEBEB]  rounded-xl">
              <span className="text-[13px]"> 2022</span> <br />{" "}
              <span className="text-black">24 </span>
              <br />
              <span> June</span>
            </div>
          </div>
        </div>
        <div className="mt-2  flex relative justify-center items-center ">
          <div className="flex justify-center items-center flex-col absolute top-10 left-0">
            <div className="w-[10px] mb-2   h-[10px]  rounded-full bg-[#98FFC1]"></div>

            <div className="border-[.5px]  h-[90px] w-[0px] border-[#EDEBEB]"></div>
          </div>
          <div
            className={` ${
              isDark ? "bg-[#413837]" : "bg-[#FFF5F5]"
            }  singleAppointments  w-[380px] rounded-lg h-[101px]`}
          >
            <div className="w-[70px] text-[#D2D5D6] font-semibold p-[8px] h-full bg-[#FFFFFF] border-[1px] text-[20px] !border-[#EDEBEB]  rounded-xl">
              <span className="text-[13px]"> 2022</span> <br />{" "}
              <span className="text-black">24 </span>
              <br />
              <span> June</span>
            </div>
          </div>
        </div>
        <div className="mt-2  flex relative justify-center items-center ">
          <div className="flex justify-center items-center flex-col absolute top-10 left-0">
            <div className="w-[10px] mb-2   h-[10px]  rounded-full bg-[#98C7FF]"></div>
          </div>
          <div
            className={` ${
              isDark ? "bg-[#413837]" : "bg-[#FFF5F5]"
            }  singleAppointments  w-[380px] rounded-lg h-[101px]`}
          >
            <div className="w-[70px] text-[#D2D5D6] font-semibold p-[8px] h-full bg-[#FFFFFF] border-[1px] text-[20px] !border-[#EDEBEB]  rounded-xl">
              <span className="text-[13px]"> 2022</span> <br />{" "}
              <span className="text-black">24 </span>
              <br />
              <span> June</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAppointment;
