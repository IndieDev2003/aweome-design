import React from "react";
import NavLink from "./NavBar/NavLink";
import { globe } from "../assets/svgs/svgs";
import NavBtn from "./NavBar/NavBtn";

function NavSide() {
  return (
    <div className="flex flex-col items-center justify-end gap-5 relative bg-black w-[20vw] h-screen">
      <h2 className="text-white uppercase leading-7 text-4xl playfair font-semibold">
        World
        <br />
        TOUR
        <br />
        Concert
      </h2>
          <div>
          <NavLink cityName={'Jakarta'} utlClass={''}/>
          <NavLink cityName={'new york'}/>
          <NavLink cityName={'bangkok'}/>
          <NavLink cityName={'shibuya   '}/>
          <NavLink cityName={'london'}/>
          <NavLink cityName={'seol'}/>
          <NavLink cityName={'madrid'}/>
          </div>
          <NavBtn/>
          <img src={globe} className="h-24 absolute top-5 -left-10 px-0.5 py-0.5 rounded-full bg-black" alt="" />
    </div>
  );
}

export default NavSide;
