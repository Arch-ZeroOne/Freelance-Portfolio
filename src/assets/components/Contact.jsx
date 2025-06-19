import React from "react";

function Contact({ ref }) {
  return (
    <div className="flex flex-col items-center gap-5" ref={ref}>
      <div className="flex flex-col items-center gap-2 mb-10">
        <p className="font-medium text-xl text-gray-500/60">Get in Touch</p>
        <h2 className="font-medium text-5xl">Contact Me</h2>
      </div>
      <div className="border-1 border-r-black rounded-4xl w-150 ml-auto mr-auto p-8 flex items-center justify-around">
        <button className="btn btn-neutral rounded-2xl p-7 flex gap-3">
          <i class="fa-solid fa-envelope text-3xl"></i>
          <p>Email Me</p>
        </button>
        <button className="btn btn-primary rounded-2xl p-7 gap-3">
          <i class="fa-solid fa-user-tie text-3xl"></i>
          <p>Job Street </p>
        </button>
      </div>

      <footer className="mt-20 text-lg font-medium text-gray-600/70">
        <p>Copyright © 2023 Windyl Monton. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
