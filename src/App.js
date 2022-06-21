import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeMain from "./Components/HomeMain/HomeMain";

function App() {
  return (
    <div className="flex bg-[#E5E5E5]">
      <Sidebar></Sidebar>
      <HomeMain></HomeMain>
    </div>
  );
}

export default App;
