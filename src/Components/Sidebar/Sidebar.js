import React from "react";
import menu from "./../../Images/Icon_Menu.png";
import menuDark from "./../../Images/Frame 2855.png";
import Home from "./../../Images/Icon_Home.png";
import Appointment from "./../../Images/Icon_Appointment.png";
import round from "./../../Images/round.png";
import logo from "./../../Images/Icon_Vector.png";
import Patient from "./../../Images/Icon_Patient Profile.png";
import Settings from "./../../Images/Icon_Settings.png";
import SettingsDark from "./../../Images/Vector (3).png";
import MedicalDark from "./../../Images/Vector (2).png";
import PatientDark from "./../../Images/Group.png";
import AppoinmentDark from "./../../Images/Group (1).png";
import sideArrow from "./../../Images/Icon_SideArrow_round.png";
import Medical from "./../../Images/Icon_medical history.png";
const Sidebar = ({ isDark, setDark }) => {
  return (
    <div
      className={`w-[264px] h-full absolute pl-[37px]    ${
        isDark ? "bg-[#2E1619]" : "bg-white"
      }`}
    >
      <div>
        <div className="shadow-lg ">
          <img
            className=" w-[45px] hidden  mx-auto absolute top-[31px] left-[37px] rounded h-[45px]"
            src={`${isDark ? menuDark : menu}`}
            alt=""
          />
          <div className="flex absolute top-[31px] left-[37px] items-center justify-start">
            <img className="w-[45px]" src={logo} alt="" />
            <p className="text-2xl ml-6">
              Medi<span className="text-[#FF7594] ">Doc</span>
            </p>
            <img className="ml-9 cursor-pointer" src={sideArrow} alt="" />
          </div>
        </div>
        <div className="flex flex-col mt-[135px] gap-y-[45px]   ml-0 items-start">
          <div className="flex  items-center ">
            <img
              className="w-[41px]  mx-auto  rounded h-[41px]"
              src={Home}
              alt=""
            />
            <p className="ml-8 text-lg font-bold">Home</p>
          </div>

          <div className="flex items-center">
            <img
              className="w-[41px] mx-auto  top-[257px] left-[32px] rounded h-[41px]"
              src={`${isDark ? PatientDark : Patient}`}
              alt=""
            />
            <p className="ml-8 text-lg font-bold">Patient Profile</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-[41px] mx-auto  top-[401px] left-[32px] rounded h-[41px]"
              src={`${isDark ? AppoinmentDark : Appointment}`}
              alt=""
            />
            <p className="ml-8 text-lg font-bold">Appointments</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-[41px] mx-auto  top-[476px] left-[33px] rounded h-[41px]"
              src={`${isDark ? MedicalDark : Medical}`}
              alt=""
            />
            <p className="ml-8 text-lg font-bold">Medical History</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-[41px] rounded-lg  mx-auto  top-[332px] left-[32px]  h-[41px]"
              src={`${isDark ? SettingsDark : Settings}`}
              alt=""
            />
            <p className="ml-8 text-lg font-bold">Settings</p>
          </div>
          <div></div>
          <div className="mt-[140px] flex ">
            <img
              className="w-[53px] hidden block mr-4 h-[53px] mx-auto  rounded "
              src={round}
              alt=""
            />
            <button className="bg-gradient-to-r from-[#FF7594] to-[#FF7C65] rounded-md text-white p-[16px]">
              New Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
