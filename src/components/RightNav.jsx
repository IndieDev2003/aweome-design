import React from "react";
import { plus } from "../assets/svgs/svgs";

function RightNav() {
  return (
    <div className="outfit w-[7vw] h-screen items-center py-10 gap-10 flex-col bg-black flex  relative">
      <img
        src={plus}
        className="h-10 border-4 border-purple-600 w-fit p-1"
        alt=""
      />

      <h2 className="oswald text-5xl leading-4 -rotate-90 mt-10 mb-14">2024</h2>
      <h2 className=" text-3xl leading-6 rotate-90">GAGAN SUMAN</h2>
      <h2 className="playfair text-2xl leading-6 w-max -rotate-90 my-24 font-bold ">
        THERE IS DARKNESS,
        <br />
        OUTSIDE
      </h2>
      <h2 className="oswald text-4xl leading-4 rotate-90 mt-5">ALONE</h2>
    </div>
  );
}

export default RightNav;
