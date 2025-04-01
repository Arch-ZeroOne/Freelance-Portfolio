import { div } from "motion/react-client";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between font-[Dm_Sans] items-center p-5 flex-col gap-10 sm:flex-row">
      <Links icon={"src/assets/images/right-down.png"} />
      <Themetoggle src={"src/assets/images/sun.png"} />
    </div>
  );
}

function Links({ icon }) {
  return (
    <div className="flex gap-8 items-center flex-col sm:flex-row">
      <Name />
      <ul className="font-semibold  flex gap-10 flex-col items-center sm:flex-row">
        <li className="flex gap-3 items-center ">
          Home <img className="h-5" src={icon}></img>
        </li>
        <li className="flex gap-3 items-center">
          About<img className="h-5" src={icon}></img>
        </li>
        <li className="flex gap-3 items-center">
          Projects
          <img className="h-5" src={icon}></img>
        </li>
        <li className="flex gap-3 items-center">
          Services <img className="h-5" src={icon}></img>
        </li>
      </ul>
    </div>
  );
}

function Name() {
  return <h1 className="font-bold text-[20px] ">Arch-ZeroOne.</h1>;
}

function Themetoggle({ src }) {
  return <img src={src} className="h-7"></img>;
}

export default Navbar;
