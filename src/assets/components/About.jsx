import React from "react";
import Image from "../images/about-me.jpg";
function About() {
  const occupation = [
    {
      icon: "fa-solid fa-award text-white text-2xl",
      title: "Experience",
      duration: "0+ Years",
      job: "Frontend Developer",
    },
    {
      icon: "fa-solid fa-user-graduate text-white text-2xl",
      title: "Education",
      duration: "2+ Years",
      job: "Currently Pursuing  Bachelors of Science In Information Technology",
    },
  ];

  return (
    <section className="flex flex-col items-center ">
      <div className="flex flex-col items-center gap-2 mb-10">
        <p className="font-medium text-xl text-gray-500/60">Get to know more</p>
        <h2 className="font-medium text-5xl">About Me</h2>
      </div>

      <div className="flex items-center gap-10 mb-5 justify-center">
        <Occupation />
        <section className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-8">
            {occupation.map((item) => (
              <Card
                icon={item.icon}
                title={item.title}
                job={item.job}
                duration={item.duration}
              />
            ))}
          </div>
          <Intro />
        </section>
      </div>
    </section>
  );
}

function Occupation() {
  return (
    <div>
      <img src={Image} className="h-full w-90 rounded-3xl  shadow-4xl"></img>
    </div>
  );
}

function Card({ icon, title, job, duration }) {
  return (
    <div>
      <div className="card bg-neutral text-neutral-content w-65 h-60  rounded-4xl">
        <div className=" flex flex-col items-center justify-center text-center gap-2 h-full p-2">
          <i className={icon}></i>
          <h2 className="card-title">{title}</h2>
          <p>{job}</p>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="flex w-130  h-50">
      <p className="indent-5 text-gray-700/80">
        Hi! I’m Windyl Monton, an aspiring Software Engineer passionate about
        building responsive, user-friendly, and full-stack web applications.
        Currently, I’m exploring the exciting world of web development, diving
        deep into both frontend and backend technologies. I enjoy turning ideas
        into interactive, functional websites while constantly learning and
        improving my skills. My goal is to grow into a well-rounded developer
        capable of solving real-world problems through code.
      </p>
    </div>
  );
}

export default About;
