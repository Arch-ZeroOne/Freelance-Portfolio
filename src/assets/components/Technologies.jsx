import React from "react";

function Technologies() {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 mb-10">
        <p className="font-medium text-xl text-gray-500/60">Explore My</p>
        <h2 className="font-medium text-5xl">Technologies</h2>
      </div>
      <div className="mb-20">
        <Languages />
      </div>
    </div>
  );
}

function Languages() {
  const style = "h-15";
  return (
    <div className="grid grid-cols-7 gap-8 w-[80%] mr-auto ml-auto">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        className={style}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        className={style}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        className={style}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        className={style}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
        className={style}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
        className={style}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
        className={style}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        className={style}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        className={style}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg"
        className={style}
      />
    </div>
  );
}

export default Technologies;
