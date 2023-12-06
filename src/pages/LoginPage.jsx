import React from "react";
import background from "../assets/background-kodoc.svg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="h-screen w-full">
      <img
        src={background}
        alt=""
        draggable={false}
        className="absolute bottom-0 left-0 w-[70rem] -z-10"
      />
      <div className="max-container px-8">
        <div className="flex flex-col items-center justify-center gap-32">
          <img
            src="/kodoc.svg"
            alt="logo"
            className="w-[40rem] mx-auto mt-10"
          />
          <div className="bg-white/60 opacity-80 backdrop-blur-sm mx-auto rounded-2xl p-10">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Masukan nama"
                className="px-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:border-green-1 focus:ring-green-1"
              />
              <Link to={"/"}>
                <button className="px-4 py-2 w-full text-gray-950 bg-green-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg border border-green-1 focus:outline-none focus:border-green-1 focus:ring-green-1">
                  Start
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
