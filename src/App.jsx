import { useState, useRef, use } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./assets/components/Navbar";
import ProfileCard from "./assets/components/ProfileCard";
import About from "./assets/components/About";
import Technologies from "./assets/components/Technologies";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import "./assets/css/output.css";

function App() {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const projRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToTech = () => {
    techRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToProj = () => {
    projRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="font-[Poppins]">
      <Navbar
        onClickAbout={scrollToAbout}
        onClickTech={scrollToTech}
        onClickProj={scrollToProj}
        onClickContact={scrollToContact}
      />
      <div className="mb-30">
        <ProfileCard onClick={scrollToContact} />
      </div>
      <div className="mb-30">
        <About ref={aboutRef} />
      </div>
      <div className="mb-30">
        <Technologies ref={techRef} />
      </div>
      <div className="mb-30">
        <Projects ref={projRef} />
      </div>
      <div className="mb-10">
        <Contact ref={contactRef} />
      </div>
    </div>
  );
}

export default App;
