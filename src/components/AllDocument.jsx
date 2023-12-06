import React from "react";
import { Link } from "react-router-dom";
import iconBack from "../assets/icon-back.svg";
import iconPlus from "../assets/icon-plus.svg";

export default function AllDocument() {
  return (
    <section className="py-16 px-20 h-[75vh]">
      <div></div>
      <div>
        <Link to={"/"} className="absolute bottom-0 left-8 md:left-20">
          <img src={iconBack} alt="icon-plus" className="w-10 md:w-[5.25rem]" />
        </Link>
        <Link to={"/manage"} className="absolute bottom-0 right-8 md:right-20">
          <img src={iconPlus} alt="icon-plus" className="w-10 md:w-[5.25rem]" />
        </Link>
      </div>
    </section>
  );
}
