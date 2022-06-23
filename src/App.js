import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeMain from "./Components/HomeMain/HomeMain";
import AppointmentPart from "./Components/Appointment/AppointmentPart";
import ToDo from "./Components/HomeMain/ToDo";
import DetailAppointment from "./Components/Appointment/DetailAppointment";
import Profile from "./Components/Appointment/Profile";

function App() {
  return (
    <div className="flex bg-[#E5E5E5]">
      <div className="flex justify-between">
        <Sidebar></Sidebar>
      </div>
      <div className="flex mt-10 main-part flex-row justify-between flex-wrap">
        <Profile></Profile>
        <HomeMain></HomeMain>
        <ToDo></ToDo>

        <DetailAppointment></DetailAppointment>
      </div>
    </div>
  );
}

export default App;
