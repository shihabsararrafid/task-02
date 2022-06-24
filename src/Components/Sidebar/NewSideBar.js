import React from "react";
import menu from "./../../Images/Icon_Menu.png";
import menuDark from "./../../Images/Frame 2855.png";
import Home from "./../../Images/Icon_Home.png";
import Appointment from "./../../Images/Icon_Appointment.png";
import round from "./../../Images/round.png";

import Patient from "./../../Images/Icon_Patient Profile.png";
import Settings from "./../../Images/Icon_Settings.png";
import SettingsDark from "./../../Images/Vector (3).png";
import MedicalDark from "./../../Images/Vector (2).png";
import PatientDark from "./../../Images/Group.png";
import AppoinmentDark from "./../../Images/Group (1).png";
import Medical from "./../../Images/Icon_medical history.png";
const NewSideBar = ({ isDark }) => {
  return (
    <div
      className={`w-[96px] h-full     ${isDark ? "bg-[#2E1619]" : "bg-white"}`}
    >
      <div>
        <div className="shadow-lg">
          <img
            className="w-[45px]  mx-auto absolute top-[31px] left-[28px] rounded h-[45px]"
            src={`${isDark ? menuDark : menu}`}
            alt=""
          />
        </div>
        <div className="flex flex-col mt-[135px] gap-y-[45px] items-center">
          <div>
            <img
              className="w-[41px]  mx-auto  top-[180px] left-[32px] rounded h-[41px]"
              src={Home}
              alt=""
            />
            <p>Home</p>
          </div>
          <div>
            <img
              className="w-[41px] rounded-lg  mx-auto  top-[332px] left-[32px]  h-[41px]"
              src={`${isDark ? SettingsDark : Settings}`}
              alt=""
            />
            <p>Home</p>
          </div>
          <div>
            <img
              className="w-[41px] mx-auto  top-[257px] left-[32px] rounded h-[41px]"
              src={`${isDark ? PatientDark : Patient}`}
              alt=""
            />
            <p>Patient Profile</p>
          </div>
          <div>
            <img
              className="w-[41px] mx-auto  top-[401px] left-[32px] rounded h-[41px]"
              src={`${isDark ? AppoinmentDark : Appointment}`}
              alt=""
            />
            <p>Appointments</p>
          </div>
          <div>
            <img
              className="w-[41px] mx-auto  top-[476px] left-[33px] rounded h-[41px]"
              src={`${isDark ? MedicalDark : Medical}`}
              alt=""
            />
            <p>Medical History</p>
          </div>
          <div></div>
          <img
            className="w-[53px] h-[53px] mx-auto absolute top-[861px] left-[20px] rounded "
            src={round}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewSideBar;
