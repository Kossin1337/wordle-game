import React, { useEffect } from "react";
import { useWordle } from "../hooks/useWordle";
import Navigation from "./Navigation";
import Grid from "./Grid";
import AlphabeticalKeyboard from "./AlphabeticalKeyboard";
import AdvancedKeyboard from "./AdvancedKeyboard";

import "./Wordle.scss";

const Wordle = ({ solution }) => {
  const { turn, currentGuess, guesses, isCorrect, handleKeyUp, usedKeys } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    console.log(
      `Solution: ${solution}`,
      guesses,
      `Turn: ${turn}`,
      `End-game: ${isCorrect}`
    );
  }, [guesses, turn, isCorrect]);

  return (
    <div className="wordle">
      <Navigation />
      <div className="game">
        <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
        {/* <AlphabeticalKeyboard usedKeys={usedKeys} /> */}
        <AdvancedKeyboard usedKeys={usedKeys} />
      </div>
    </div>
  );
};

export default Wordle;
