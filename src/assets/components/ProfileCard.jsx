import React from "react";
import Profile from "../images/profile.png";
function ProfileCard() {
  return (
    <div className="flex items-center justify-center gap-4 mt-15">
      <div className="flex items-center">
        <img src={Profile} className="w-100 rounded-4xl h-full"></img>
      </div>
      <ProfileGroup />
    </div>
  );
}

function ProfileGroup() {
  return (
    <section className="flex flex-col items-center gap-6">
      <div className="flex items-center flex-col gap-3">
        <p className="font-bold text-2xl text-gray-500/60">Hello, I' m</p>
        <h2 className="text-5xl font-bold">Windyl P. Monton</h2>
        <h2 className="font-bold text-3xl text-gray-500/60">
          Aspiring Software Engineer
        </h2>
      </div>

      <div className="flex gap-2 items-center">
        <button className="btn btn-primary rounded-2xl p-3 w-40">
          Download CV
        </button>
        <button className="btn btn-neutral rounded-2xl p-3 w-40">
          Contact Info
        </button>
      </div>
      <Socials />
    </section>
  );
}

function Socials() {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <i class="fa-brands fa-github text-3xl"></i>
      <i class="fa-brands fa-instagram text-3xl"></i>
      <i class="fa-brands fa-facebook text-3xl"></i>
    </div>
  );
}
export default ProfileCard;
