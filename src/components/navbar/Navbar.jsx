import React from "react";
import Name from "../name/Name";
function Navbar() {
  return (
    <div className="flex justify-between flex-row   items-center p-5 gap-10 cursor-pointer w-full">
      <Name />
      <Links />
    </div>
  );
}

function Links() {
  return (
    <div className="flex gap-10 items-center font-[League_Spartan]">
      <li className="list-none text-2xl  font-extrabold ">Technologies</li>
      <li className="list-none  text-2xl font-extrabold ">Projects</li>
      <li className="list-none font-extrabold  text-2xl">Contact</li>
    </div>
  );
}

export default Navbar;
