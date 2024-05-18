"use client";

import { useWordContext } from "../context/WordProvider";
import React from "react";

const Hexagon = ({ words }) => {
  const { handleLetterClick } = useWordContext();

  return (
    <div className="container">
      {words.validLetters.map((letter, index) => (
        <div
          key={index}
          className={`hex pos${index} ${index === 3 ? "bg-yellow" : "bg-gray"}`}
          onClick={() => handleLetterClick(letter)}
        >
          {letter.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Hexagon;
