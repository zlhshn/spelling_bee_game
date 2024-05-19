"use client";

import { useWordContext } from "../context/WordProvider";
import Hexagon from "../components/Hexagon";
import { Input } from "@headlessui/react";
import React, { useState, useEffect, useRef } from "react";

const GamePage = ({ words, generateNewWord, language }) => {
  const { selectedLetter, setSelectedLetter } = useWordContext();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [wordList, setWordList] = useState([]);
  const [timer, setTimer] = useState(60);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (isGameStarted) {
      setInputValue(newValue);
      setSelectedLetter(newValue);
    }
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter" && isGameStarted) {
      checkWord();
    }
  };

  const handleDelete = () => {
    if (isGameStarted) {
      setInputValue((prevValue) => prevValue.slice(0, -1));
      setSelectedLetter((prevValue) => prevValue.slice(0, -1));
    }
  };

  const checkWord = () => {
    if (!isGameStarted) return;

    if (inputValue.length < 4) {
    } else if (!isWordValid(inputValue)) {
    } else if (wordList.includes(inputValue)) {
    } else if (words.answers.includes(inputValue)) {
      setWordList((prevWordList) => [...prevWordList, inputValue]);
      
 
      const isPangram = words.validLetters.every(letter => inputValue.includes(letter));
      const wordScore = isPangram ? inputValue.length + 7 : inputValue.length;

      setScore((prevScore) => prevScore + wordScore);
      setTimer((prevTimer) => Math.min(prevTimer + 15, 60));

      setInputValue("");
      setSelectedLetter("");
    } else {
    }
  };

  const isWordValid = (word) => {
    for (let letter of word) {
      if (!words.validLetters.includes(letter)) {
        return false;
      }
    }
    return true;
  };

  const startGame = () => {
    setIsGameStarted(true);
    setInputValue("");
    setSelectedLetter("");
    inputRef.current.focus();
    setTimer(59);
    setScore(0);
    setWordList([]);
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          setIsGameStarted(false);
          handleGameOver();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const handleGameOver = () => {
    const finalScore = score;
    const highScoreKey = `highScore_${language}`;
    if (finalScore > highScore) {
      setHighScore(finalScore);
      localStorage.setItem(highScoreKey, finalScore);
    }
  };

  useEffect(() => {
    if (isGameStarted) {
      setInputValue(selectedLetter);
    }
  }, [selectedLetter, isGameStarted]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputValue]);

  useEffect(() => {
    const highScoreKey = `highScore_${language}`;
    const storedHighScore = localStorage.getItem(highScoreKey) || 0;
    setHighScore(parseInt(storedHighScore));
  }, [language]);

  useEffect(() => {
    if (!isGameStarted && score > highScore) {
      setHighScore(score);
      const highScoreKey = `highScore_${language}`;
      localStorage.setItem(highScoreKey, score);
    }
  }, [isGameStarted, score, highScore, language]);

  useEffect(() => {
    if (isGameStarted && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isGameStarted]);

  return (
    <>
      <div>
        <div className="flex justify-center gap-5 text-3xl text-center my-5">
          <div className="w-[165px] text-lg font-bold border border-gray-300 px-4 py-1.5 rounded-md">
            {isGameStarted
              ? `00:${timer.toString().padStart(2, "0")}`
              : "01:00"}
          </div>
          <div className="w-[165px] text-lg font-bold border border-gray-300 px-4 py-1.5 rounded-md">
            Top Score: {highScore}
          </div>
        </div>
      </div>
      <main className="max-w-[1200px] m-auto flex flex-col sm:flex sm:flex-row gap-8 items-center justify-center  mt-10">
        <div className="flex flex-col w-[100%] h-[100%] justify-center items-center">
          <Input
            ref={inputRef}
            className={`w-[280px] me-2 text-center font-bold text-2xl my-10 caret-yellow-500 outline-none border-none ${
              !isGameStarted ? "bg-white" : "bg-white caret-amber-400"
            }`}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterPress}
          />
          <Hexagon words={words} />
          <div className="flex gap-6 p-7">
            {!isGameStarted && (
              <>
                <button
                  className="w-[125px] text-lg font-bold border border-gray-300 px-2 py-1.5 rounded-3xl"
                  onClick={startGame}
                >
                  Start
                </button>
                <button
                  className="w-[125px] text-lg font-bold border border-gray-300 px-2 py-1.5 rounded-3xl"
                  onClick={generateNewWord}
                >
                  New Letters
                </button>
              </>
            )}
            {isGameStarted && (
              <>
                <button
                  className="w-[95px] text-lg font-bold border border-gray-300 px-4 py-1.5 rounded-3xl"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="w-[95px] text-lg font-bold border border-gray-300 px-4 py-1.5 rounded-3xl"
                  onClick={checkWord}
                >
                  Enter
                </button>
              </>
            )}
          </div>
        </div>
        <div className="h-[80vh] w-[100%] p-5">
          <div className="border p-10 rounded-md h-[80%]">
            <div className="flex justify-between">
              <h3 className="pb-4">You have found {wordList.length} words</h3>
              <p>Point: {score}</p>
            </div>

            {wordList.map((word, index) => (
              <p key={index} className="py-1 border-b border-gray-200">
                {word}
              </p>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default GamePage;