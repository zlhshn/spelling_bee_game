"use client";

import React, { useState } from "react";
import SwitchLanguage from "./SwitchLanguage";


const Navbar = () => {
  const [open, setOpen] = useState(false); 

  return (
    <div className="flex justify-between items-center border border-b px-6">
      <div className="text-black font-bold font-libreSans bg-white py-2 text-[24px] px-7">
        <p>Spelling Bee</p>
      </div>
      <div className="flex items-center justify-between gap-6 cursor-pointer">

        <SwitchLanguage />
      </div>

    </div>
  );
};

export default Navbar;