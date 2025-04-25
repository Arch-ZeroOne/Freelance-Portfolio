import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col self-start mt-30 gap-5 p-10  items-center ml-20">
      <Info />
      <Button />
    </div>
  );
};

const Info = () => {
  return (
    <div className="font-[League_Spartan] flex flex-col items-center gap-1">
      <h1 className="text-7xl font-bold">Windyl Monton</h1>
      <p className="font-thin text-2xl">Frontend Developer</p>
    </div>
  );
};

const Button = () => {
  return (
    <>
      <button class="contactButton self-start ">
        About me
        <div class="iconButton">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
    </>
  );
};

export default Profile;
