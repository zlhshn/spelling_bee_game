"use client";

import React, { useState } from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";
import SwitchLanguage from "./SwitchLanguage";
import Modal from "../components/Modal"; 

const Navbar = () => {
  const [open, setOpen] = useState(false); 

  return (
    <div className="flex justify-between items-center border border-b px-6">
      <div className="text-black font-bold font-libreSans bg-white py-2 text-[24px] px-7">
        <p>Spelling Bee</p>
      </div>
      <div className="flex items-center justify-between gap-6 cursor-pointer">
        <RxQuestionMarkCircled
          className="text-xl"
          onClick={() => {
            setOpen(true);
          }}
        />
        <SwitchLanguage />
      </div>
      <Modal open={open} setOpen={setOpen} /> 
    </div>
  );
};

export default Navbar;