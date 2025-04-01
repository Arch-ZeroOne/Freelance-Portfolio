import React from "react";

const Profile = () => {
  return (
    <div>
      <LargeName />
      <Job />
      <Location />
      <Message />
      <Button />
    </div>
  );
};
const LargeName = () => {
  return <h1 className="font-bold text-5xl">Arch-ZeroOne</h1>;
};
const Job = () => {
  return <h1 className="font-bold text-1xl">Frontend Developer</h1>;
};

const Location = () => {
  return <p className="fill-amber-950">Lupon Davao Oriental</p>;
};
const Message = () => {
  return (
    <p>
      I create static websites for your business with ease and modernize design
    </p>
  );
};

const Button = () => {
  return <button>Get in touch</button>;
};

const Image = () => {
  return <img></img>;
};
export default Profile;
