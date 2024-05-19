"use client";

import GamePage from "../../../components/GamePage";
import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { words as wordsTR } from "../../../constants/word-tr";
import { words as wordsEN } from "../../../constants/word-en";

const Page = () => {
  const [randomData, setRandomData] = useState(null);
  const locale = useLocale();

  useEffect(() => {
    const words = locale === "tr" ? wordsTR : wordsEN;
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomData(words[randomIndex]);
  }, [locale]);

  const generateNewWord = () => {
    const words = locale === "tr" ? wordsTR : wordsEN;
    const randomIndex = Math.floor(Math.random() * words.length);
    const newRandomData = words[randomIndex];
    setRandomData(newRandomData);
  };


  if (!randomData) return null;

  return (
    <div>
      <GamePage words={randomData} generateNewWord={generateNewWord} />
    </div>
  );
};

export default Page;
