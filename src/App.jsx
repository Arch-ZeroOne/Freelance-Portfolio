import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./assets/components/Navbar";
import ProfileCard from "./assets/components/ProfileCard";
import About from "./assets/components/About";
import Technologies from "./assets/components/Technologies";
import "./assets/css/output.css";

function App() {
  return (
    <div className="font-[Poppins]">
      <Navbar />
      <div className="mb-30">
        <ProfileCard />
      </div>
      <div className="mb-30">
        <About />
      </div>
      <div>
        <Technologies />
      </div>
    </div>
  );
}

export default App;
