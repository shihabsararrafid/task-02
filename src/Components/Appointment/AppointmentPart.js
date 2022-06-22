import React from "react";
import DetailAppointment from "./DetailAppointment";
import Profile from "./Profile";

const AppointmentPart = () => {
  return (
    <div className="ml-[164px] w-[452px] mt-5">
      <Profile></Profile>
      <DetailAppointment></DetailAppointment>
    </div>
  );
};

export default AppointmentPart;
