import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeMain from "./Components/HomeMain/HomeMain";
import AppointmentPart from "./Components/Appointment/AppointmentPart";
import ToDo from "./Components/HomeMain/ToDo";
import DetailAppointment from "./Components/Appointment/DetailAppointment";
import Profile from "./Components/Appointment/Profile";
import CoronaUpdate from "./Components/CoronaUpdate/CoronaUpdate";
import { useState } from "react";

function App() {
  const [isDark, setDark] = useState(false);
  return (
    <div
      className={`flex relative h-auto ${
        isDark ? "bg-black" : "bg-[#E5E5E5]"
      } `}
    >
      <div className="flex justify-between">
        <Sidebar isDark={isDark} setDark={setDark}></Sidebar>
      </div>
      <div className="flex mt-10 mb-12 main-part flex-row justify-between flex-wrap">
        <Profile isDark={isDark} setDark={setDark}></Profile>
        <HomeMain isDark={isDark}></HomeMain>
        <ToDo isDark={isDark}></ToDo>

        <DetailAppointment></DetailAppointment>
        <CoronaUpdate isDark={isDark}></CoronaUpdate>
      </div>
    </div>
  );
}

export default App;
