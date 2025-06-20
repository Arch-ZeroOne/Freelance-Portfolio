import React from "react";
import Movie from "../images/movie-search.png";
import Crypto from "../images/crypto-tracker.png";
import Weather from "../images/weather-app.png";
import Surebank from "../images/sure-bank.png";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react";

function Projects({ ref }) {
  const style = "h-10";
  const notify = () => toast.error("No available demo yet :)");
  return (
    <div ref={ref}>
      <Toaster />
      <div className="flex flex-col items-center gap-2 mb-10">
        <p className="font-medium text-xl text-gray-500/60">Browse My Recent</p>
        <h2 className="font-medium text-5xl">Projects</h2>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3">
        <div>
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
          >
            <div className="card bg-base-100 image-full h-100 w-100 shadow-sm ">
              <figure>
                <img src={Movie} alt="Shoes" />
              </figure>
              <div className="card-body ">
                <section className="flex flex-col gap-5 justify-center h-full">
                  <div className="flex flex-col justify-center items-center gap-5 h-full">
                    <h2 className="text-2xl font-medium">Movie Search</h2>
                    <div className="flex items-center gap-4 ">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                        className={style}
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                        className={style}
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg"
                        className={style}
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                        className={style}
                      />
                    </div>
                    <div className="card-actions  justify-center">
                      <button
                        className="btn btn-neutral"
                        onClick={() => {
                          window.location =
                            "https://github.com/Arch-ZeroOne/Movie-Search";
                        }}
                      >
                        <i class="fa-brands fa-github text-white text-xl"></i>
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          window.location =
                            "https://movie-search-three-xi.vercel.app/";
                        }}
                      >
                        Live Demo
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.button>
        </div>

        <div>
          <motion.button whileHover={{ scale: 1.1 }}>
            <div className="card bg-base-100 image-full h-100 w-100 shadow-sm ">
              <figure>
                <img src={Crypto} alt="Shoes" />
              </figure>
              <div className="card-body ">
                <section className="flex flex-col gap-5 justify-center h-full">
                  <div className="flex flex-col justify-center items-center gap-5 h-full">
                    <h2 className="text-2xl font-medium">Crytpo Tracker</h2>
                    <div className="flex items-center gap-4 ">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                        className={style}
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                        className={style}
                      />

                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                        className={style}
                      />
                    </div>
                    <div className="card-actions  justify-center">
                      <button
                        className="btn btn-neutral"
                        onClick={() => {
                          window.location =
                            "https://github.com/Arch-ZeroOne/Crypto-Currency-Tracker";
                        }}
                      >
                        <i class="fa-brands fa-github text-white text-xl"></i>
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          window.location =
                            "https://crypto-currency-tracker-phi.vercel.app/";
                        }}
                      >
                        Live Demo
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.button>
        </div>
        <div>
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
          >
            <div className="card bg-base-100 image-full h-100 w-100 shadow-sm ">
              <figure>
                <img src={Weather} alt="Shoes" />
              </figure>
              <div className="card-body ">
                <section className="flex flex-col gap-5 justify-center h-full">
                  <div className="flex flex-col justify-center items-center gap-5 h-full">
                    <h2 className="text-2xl font-medium">Weather App</h2>
                    <div className="flex items-center gap-4 ">
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
                    </div>
                    <div className="card-actions  justify-center">
                      <button className="btn btn-neutral">
                        <i
                          class="fa-brands fa-github text-white text-xl"
                          onClick={() => {
                            window.location =
                              "https://github.com/Arch-ZeroOne/Weather-Website";
                          }}
                        ></i>
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          window.location =
                            "https://weather-website-seven-rouge.vercel.app/";
                        }}
                      >
                        Live Demo
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.button>
        </div>
        <div>
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
          >
            <div className="card bg-base-100 image-full h-100 w-100 shadow-sm ">
              <figure>
                <img src={Surebank} alt="Shoes" />
              </figure>
              <div className="card-body ">
                <section className="flex flex-col gap-5 justify-center h-full">
                  <div className="flex flex-col justify-center items-center gap-5 h-full">
                    <h2 className="text-2xl font-medium">Sure Bank</h2>
                    <div className="flex items-center gap-4 ">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                        className={style}
                      />

                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                        className={style}
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                        className={style}
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                        className={style}
                      />

                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                        className={style}
                      />
                    </div>
                    <div className="card-actions  justify-center">
                      <button className="btn btn-neutral">
                        <i
                          class="fa-brands fa-github text-white text-xl"
                          onClick={() => {
                            window.location =
                              "https://github.com/Arch-ZeroOne/Bank-Management-System";
                          }}
                        ></i>
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => notify()}
                      >
                        Live Demo
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.button>
        </div>
      </section>
    </div>
  );
}

export default Projects;
