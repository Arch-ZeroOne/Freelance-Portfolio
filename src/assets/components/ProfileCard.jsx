import React from "react";
import Profile from "../images/profile.png";
function ProfileCard({ onClick }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-15">
      <div className="flex items-center">
        <img src={Profile} className="w-100 rounded-4xl h-full"></img>
      </div>
      <ProfileGroup onClick={onClick} />
    </div>
  );
}

function ProfileGroup({ onClick }) {
  return (
    <section className="flex flex-col items-center gap-6">
      <div className="flex items-center flex-col gap-3 sm:text-center">
        <p className="font-bold text-3xl md:text-4xl text-gray-500/60">
          Hello, I' m
        </p>
        <h2 className="text-3xl  md:text-4xl font-bold">Windyl P. Monton</h2>
        <h2 className="font-bold text-2xl md:text-4xl text-gray-500/60">
          Aspiring Software Engineer
        </h2>
      </div>

      <div className="flex gap-2 items-center">
        <button
          className="btn btn-primary rounded-2xl p-3 w-40"
          onClick={() => {
            window.location = "https://scarlet-merry-85.tiiny.site";
          }}
        >
          Resume
          <i class="fa-solid fa-file"></i>
        </button>
        <button
          className="btn btn-neutral rounded-2xl p-3 w-40"
          onClick={onClick}
        >
          Contact Info
          <i class="fa-solid fa-address-book"></i>
        </button>
      </div>
      <Socials />
    </section>
  );
}

function Socials() {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <i
        title="Instagram Profile"
        class="fa-brands fa-instagram text-3xl"
        onClick={() => {
          window.location = "https://www.instagram.com/devwindyl/";
        }}
      ></i>
      <i
        title="Facebook Profile"
        class="fa-brands fa-facebook text-3xl"
        onClick={() => {
          window.location = "https://www.facebook.com/windyl.monton.3";
        }}
      ></i>
    </div>
  );
}
export default ProfileCard;
