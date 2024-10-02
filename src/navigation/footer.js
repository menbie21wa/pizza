import React from "react";
import pizzaButton from "../Assets/company-logo/pizzaButton.PNG";
import {
  FaTelegram,
  FaClinicMedical,
  FaDigitalOcean,
  FaHeadSideMask,
  FaReacteurope,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaNode,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import robot from "../Assets/company-logo/logo_back_less.png";

const Footers = () => {
  return (
    <>
      <div className="text-center lg:text-left bg-[#CCB691] text-[#000]">
        <div className=" py-4 text-center md:text-left grid  w-11/12 xl:w-10/12 mx-auto ">
          <div className="grid grid-1 md:grid-cols-1 lg:grid-cols-2 gap-0 flex md:justify-between py-12">
            <div>
              <div className="font-display text-blue-100 text-xs flex justify-center mb-6 gap-4">
                <h1 className="font-serif text-lg">Home</h1>
                <h1 className="font-serif text-lg">Order</h1>
                <h1 className="font-serif text-lg">About Us</h1>
              </div>
            </div>
            <div>
              <div className="font-display text-blue-100 text-xs flex justify-end mb-6 gap-8">
                <div>
                  <img src={pizzaButton} className="w-full" />

                  <form>
                    <div class="flex">
                      <div class="relative w-full">
                        <input
                          type="search"
                          id="search-dropdown"
                          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                          placeholder="your feedback..."
                          required
                        />
                        <button
                          type="submit"
                          class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white  rounded-e-lg  focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                          <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="text-black"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center lg:text-left bg-[#000] text-[#fff]">
        <div className=" text-center md:text-left grid  w-11/12 xl:w-10/12 mx-auto ">
          <div className="grid grid-1 md:grid-cols-1 lg:grid-cols-2 gap-0 flex md:justify-between py-8">
            <div>
              <div className="font-display text-blue-100 text-xs flex justify-center  gap-4">
                <h1 className="font-serif text-md">
                  @2024 Pizza All Rights Reserved
                </h1>
                <h1 className="font-serif text-md">Terms & Conditions</h1>
              </div>
            </div>
            <div>
              <div className="font-display text-blue-100 text-xs flex justify-end  gap-8">
                <a
                  href="#!"
                  type="button"
                  className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:scale-110 hover:duration-300 w-8 h-8"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    className="w-2 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </a>
                <a href="#!" className="">
                  <FaTelegram className="w-9 h-9" />
                </a>
                <a
                  href="#!"
                  type="button"
                  className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:scale-110 hover:duration-300 w-8 h-8"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    className="w-3 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#!"
                  type="button"
                  className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:scale-110 hover:duration-300 w-8 h-8"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    className="w-3 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footers;
