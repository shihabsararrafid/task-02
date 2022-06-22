import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeMain from "./Components/HomeMain/HomeMain";
import AppointmentPart from "./Components/Appointment/AppointmentPart";

function App() {
  return (
    <div className="flex bg-[#E5E5E5]">
      <Sidebar></Sidebar>
      <HomeMain></HomeMain>
      <AppointmentPart></AppointmentPart>
    </div>
  );
}

export default App;
