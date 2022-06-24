import React, { useState } from "react";
import dark from "./../../Images/Toggle button (1).png";
import light from "./../../Images/Toggle button.png";
import avatar from "./../../Images/Avatar.png";
import menu from "./../../Images/Icon_Menu.png";
import menuDark from "./../../Images/Frame 2855.png";
import downArrow from "./../../Images/Icon_downArrow.png";
import Sidebar from "../Sidebar/Sidebar";
import NewSideBar from "../Sidebar/NewSideBar";
const Profile = ({ isDark, setDark, isShrink }) => {
  const [anotherShrink, setAnotherShrink] = useState(false);
  const handleShrink = () => {
    console.log(" clicked");
    setAnotherShrink(!anotherShrink);
    const document1 = document.getElementById("profile");
    document1.classList.toggle("myStyle");
    console.log(document1);
  };
  return (
    <div
      id="profile"
      className={`flex  ${
        anotherShrink ? "px-7" : "pl-0"
      }  profile items-center `}
    >
      <div className="shadow-lg  menufromanother">
        {anotherShrink ? (
          <img
            onClick={handleShrink}
            className={`w-[45px] cursor-pointer  mx-auto absolute top-[31px] left-[37px] rounded h-[45px]`}
            src={`${isDark ? menuDark : menu}`}
            alt=""
          />
        ) : (
          <NewSideBar
            isDark={isDark}
            anotherShrink={anotherShrink}
            setAnotherShrink={setAnotherShrink}
          ></NewSideBar>
        )}
      </div>{" "}
      <div className="flex items-center">
        <img
          onClick={() => setDark(!isDark)}
          src={`${isDark ? dark : light}`}
          alt=""
        />
        <img src={avatar} alt="" />
        <img className="" src={downArrow} alt="" />
      </div>
    </div>
  );
};

export default Profile;
