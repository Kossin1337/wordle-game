import React, { useState, useEffect } from "react";
import { useWordle } from "../hooks/useWordle";
import Navigation from "./Navigation";
import Grid from "./Grid";
import AlphabeticalKeyboard from "./keyboards/AlphabeticalKeyboard";
import AdvancedKeyboard from "./keyboards/AdvancedKeyboard";
import Modal from "./modal/Modal";

import "./Wordle.scss";

const Wordle = ({ solution }) => {
  const { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn > 5) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
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
        {showModal && (
          <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
        )}
      </div>
    </div>
  );
};

export default Wordle;
