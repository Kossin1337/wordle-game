import React, { useEffect } from "react";
import { useWordle } from "../hooks/useWordle";
import Navigation from "./Navigation";
import Grid from "./Grid";
import AlphabeticalKeyboard from "./keyboards/AlphabeticalKeyboard";
import AdvancedKeyboard from "./keyboards/AdvancedKeyboard";

import "./Wordle.scss";

const Wordle = ({ solution }) => {
  const { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect) {
      console.log(`Congrats, you win!`);
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn > 5) {
      console.log(`GAME-OVER, OUT OF GUESSES`);
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  // useEffect(() => {
  //   console.log(
  //     `Solution: ${solution}`,
  //     guesses,
  //     `Turn: ${turn}`,
  //     `End-game: ${isCorrect}`
  //   );
  // }, [guesses, turn, isCorrect]);

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
