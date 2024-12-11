import React, { useState } from "react";
import { snowflake } from "../../assets/svgs/svgs";

function NavBtn() {
  const [isActive, setActive] = useState(false);
  return (
    <div className={`flex relative bg-gray-900 border-4 h-[180px] w-[110px] rounded-full ${isActive?'items-start':'items-end'} justify-center p-1 mb-2 `}>
      <div className="w-[100px] h-[95px] bg-purple-700 rounded-full p-2">
        <h2 className="flex items-center justify-center h-full text-sm outfit border rounded-full">
          Join Now
        </h2>
      </div>
      <img src={snowflake} className={`${isActive?'hidden':'absolute'} top-7 h-6`} alt="" />
    </div>
  );
}

export default NavBtn;
