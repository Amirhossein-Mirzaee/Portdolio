import React from "react";
import vpn from "../../assets/vpn.png";
import onlineshop from "../../assets/online-shop.png";
import expence from "../../assets/expense.png";
import dark from "../../assets/dark.png";
import music from "../../assets/music-player.png";
import weather from "../../assets/weather.png";
import bmi from "../../assets/bmi.png";
import { JsIcon, ReactIcon } from "../../assets/icons/icons";

const Projects = () => {
  return (
    <div
      id="project"
      className="flex justify-center items-center flex-col py-36 xl:px-24 lg:px-9 max-w-[2000px] mx-auto"
    >
      <h1 className="section__title">My Project</h1>
      <div className="section__subtitle">What I created</div>
      <div className="text-3xl pb-16 text-center xs:max-w-sm mx-auto sm:max-w-full">
        Tap To See Each You Want
      </div>
      <div className="grid items-center justify-center w-full lg:gap-11 lg:flex-row xs:grid-cols-1 lg:grid-cols-3 xs:space-y-14 lg:space-y-0 xs:p-20 lg:p-0">
        <a
          className="flex-1 h-[350px] relative cursor-pointer hover:scale-110 bg-black rounded-xl  transition-all duration-300 group"
          href="https://expense-trackerr-dusky.vercel.app/"
        >
          <img
            className="w-full h-full object-top object-cover absolute rounded-xl group-hover:opacity-25 transition-all duration-300"
            src={expence}
            alt="expense"
          />
          <p className="absolute z-50  text-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition-all duration-700 group-hover:scale-150">
            click to visit
          </p>
          <div className="p-4">
            <ReactIcon />
          </div>
        </a>
        <a
          className="flex-1 h-[350px] relative cursor-pointer hover:scale-110 bg-black rounded-xl transition-all duration-300 group"
          href="https://vpn-sale-amirhoseeis-projects.vercel.app/"
        >
          <img
            className="w-full hover:backdrop-blur-3xl h-full object-center object-cover absolute rounded-xl group-hover:opacity-25 transition-all duration-300"
            src={vpn}
            alt="dcv"
          />
          <p className="absolute z-50  text-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition-all duration-700 group-hover:scale-150">
            click to visit
          </p>
          <div className="p-4">
            <ReactIcon />
          </div>
        </a>
        <a
          className="flex-1 h-[350px] relative cursor-pointer hover:scale-110 bg-black rounded-xl transition-all duration-300 group"
          href="https://online-shop-roan-psi.vercel.app/"
        >
          <img
            className="w-full  h-full object-center object-cover absolute  group-hover:opacity-25 rounded-xl transition-all duration-300"
            src={onlineshop}
            alt="545614"
          />
          <p className="absolute z-50  text-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition-all duration-700 group-hover:scale-150">
            click to visit
          </p>
          <div className="p-4">
            <ReactIcon />
          </div>
        </a>
        <a
          className="flex-1 h-[350px] relative cursor-pointer hover:scale-110 bg-black rounded-xl transition-all duration-300 group"
          href="https://music-player-gules-omega.vercel.app/"
        >
          <img
            className="w-full  h-full object-center object-cover absolute  group-hover:opacity-25 rounded-xl transition-all duration-300"
            src={music}
            alt="545614"
          />
          <p className="absolute z-50  text-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition-all duration-700 group-hover:scale-150">
            click to visit
          </p>
          <div className="p-4">
            <JsIcon />
          </div>
        </a>{" "}
        <a
          className="flex-1 h-[350px] relative cursor-pointer hover:scale-110 bg-black rounded-xl transition-all duration-300 group"
          href="https://dark-mode-omega-lime.vercel.app/"
        >
          <img
            className="w-full  h-full object-center object-cover absolute  group-hover:opacity-25 rounded-xl transition-all duration-300"
            src={dark}
            alt="545614"
          />
          <p className="absolute z-50  text-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition-all duration-700 group-hover:scale-150">
            click to visit
          </p>
          <div className="p-4">
            <JsIcon />
          </div>
        </a>{" "}
        <a
          className="flex-1 h-[350px] relative cursor-pointer hover:scale-110 bg-black rounded-xl transition-all duration-300 group"
          href="https://weather-app-delta-ashen.vercel.app/"
        >
          <img
            className="w-full  h-full object-center object-cover absolute  group-hover:opacity-25 rounded-xl transition-all duration-300"
            src={weather}
            alt="545614"
          />
          <p className="absolute z-50  text-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition-all duration-700 group-hover:scale-150">
            click to visit
          </p>
          <div className="p-4">
            <ReactIcon />
          </div>
        </a>
        <a
          className="flex-1 h-[350px] relative cursor-pointer hover:scale-110 bg-black rounded-xl transition-all duration-300 group"
          href="https://bmi-with-vite.vercel.app/"
        >
          <img
            className="w-full  h-full object-center object-cover absolute  group-hover:opacity-25 rounded-xl transition-all duration-300"
            src={bmi}
            alt="545614"
          />
          <p className="absolute z-50  text-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition-all duration-700 group-hover:scale-150">
            click to visit
          </p>
          <div className="p-4">
            <ReactIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
