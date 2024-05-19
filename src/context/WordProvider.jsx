"use client";
import React, { createContext, useContext, useState } from "react";

export const WordContext = createContext();

export const useWordContext = () => {
  return useContext(WordContext);
};

const WordProvider = ({ children }) => {
  const [selectedLetter, setSelectedLetter] = useState("");
  

  const handleLetterClick = (letter) => {
    setSelectedLetter((prev) => prev + letter);
  };

  const values = {
    selectedLetter,
    setSelectedLetter,
    handleLetterClick,
  };

  return <WordContext.Provider value={values}>{children}</WordContext.Provider>;
};

export default WordProvider;
