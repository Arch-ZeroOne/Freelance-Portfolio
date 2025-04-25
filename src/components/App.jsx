import React from "react";
import Navbar from "./navbar/Navbar";
import "../tailwind.css";
import "../assets/css/name.css";
import "../assets/css/button.css";
import Profile from "./profile/Profile";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
