import React, { useState } from "react";
import dark from "./../../Images/Toggle button (1).png";
import light from "./../../Images/Toggle button.png";
import avatar from "./../../Images/Avatar.png";
import downArrow from "./../../Images/Icon_downArrow.png";
const Profile = () => {
  const [isDark, setDark] = useState(false);
  return (
    <div className="flex px-7  profile items-center justify-end">
      <img
        onClick={() => setDark(!isDark)}
        src={`${isDark ? dark : light}`}
        alt=""
      />
      <img src={avatar} alt="" />
      <img className="" src={downArrow} alt="" />
    </div>
  );
};

export default Profile;
