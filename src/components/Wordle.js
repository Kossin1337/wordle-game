import React, { useEffect } from "react";
import { useWordle } from "../hooks/useWordle";
import Grid from "./Grid";
import "./Wordle.scss";

const Wordle = ({ solution }) => {
  const { turn, currentGuess, guesses, isCorrect, handleKeyUp } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div className="wordle">
      <span>Current guess: {currentGuess}</span>
      <span>wordle</span>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
    </div>
  );
};

export default Wordle;
