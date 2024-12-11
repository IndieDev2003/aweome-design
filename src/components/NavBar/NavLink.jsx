import React from "react";
import { arrow } from "../../assets/svgs/svgs";

function NavLink({ cityName, utlClass }) {
  return (
    <div className={`${utlClass} min-w-[160px]  cursor-pointer flex items-center gap-2 justify-between border-b  border-[#B6E11A]`}>
      <h3 className="text-xl flex-1 outfit uppercase text-start">
        {!cityName ? "JAkarta" : cityName}
      </h3>
      <img src={arrow} className="h-10 -rotate-45" alt="" />
    </div>
  );
}

export default NavLink;
