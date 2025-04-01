import React from "react";
import Navbar from "./navbar/Navbar";
import "../tailwind.css";
import Profile from "./profile/Profile";

function App() {
  return (
    <div className="gr">
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
