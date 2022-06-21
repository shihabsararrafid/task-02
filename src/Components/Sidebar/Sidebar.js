import React from "react";
import menu from "./../../Images/Icon_Menu.png";
import Home from "./../../Images/Icon_Home.png";
import Appointment from "./../../Images/Icon_Appointment.png";
import round from "./../../Images/round.png";
import Patient from "./../../Images/Icon_Patient Profile.png";
import Settings from "./../../Images/Icon_Settings.png";
import Medical from "./../../Images/Icon_medical history.png";
const Sidebar = () => {
  return (
    <div className="w-[96px] h-[1051px]   border-2 border-black">
      <div>
        <div>
          <img
            className="w-[41px] mx-auto absolute top-[31px] left-[28px] rounded h-[41px]"
            src={menu}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[41px] mx-auto absolute top-[180px] left-[32px] rounded h-[41px]"
            src={Home}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[41px] mx-auto absolute top-[332px] left-[32px] rounded h-[41px]"
            src={Appointment}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[41px] mx-auto absolute top-[257px] left-[32px] rounded h-[41px]"
            src={Patient}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[41px] mx-auto absolute top-[401px] left-[32px] rounded h-[41px]"
            src={Settings}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[41px] mx-auto absolute top-[476px] left-[33px] rounded h-[41px]"
            src={Medical}
            alt=""
          />
        </div>
        <div>
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

export default Sidebar;
