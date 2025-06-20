import React from "react";

function Contact({ ref }) {
  return (
    <div className="flex flex-col items-center gap-5" ref={ref}>
      <div className="flex flex-col items-center gap-2 mb-10">
        <p className="font-medium text-xl text-gray-500/60">Get in Touch</p>
        <h2 className="font-medium text-5xl">Contact Me</h2>
      </div>
      <div className="border-1 border-r-black rounded-4xl w-90 md:w-130 md:flex-row ml-auto mr-auto p-8 flex flex-col gap-3 items-center justify-around">
        <button className="btn btn-neutral rounded-2xl p-7 flex gap-3">
          <i class="fa-solid fa-envelope text-3xl"></i>
          {/*
            mailto protocol is used to redirect directly to the selected gmail address
            */}
          <p
            onClick={() => {
              window.location.href = "mailto:windylmonton2@gmail.com";
            }}
          >
            Email Me
          </p>
        </button>
        <button
          className="btn btn-primary rounded-2xl p-7 gap-3"
          onClick={() => {
            window.location = "https://www.facebook.com/windyl.monton.3";
          }}
        >
          <i class="fa-brands fa-facebook text-3xl"></i>
          <p>Facebook Profile </p>
        </button>
      </div>

      <footer className="mt-20 max-sm:text-center text-lg font-medium text-gray-600/70">
        <p>Copyright © 2023 Windyl Monton. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
