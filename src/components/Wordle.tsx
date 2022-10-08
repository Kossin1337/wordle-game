import React, { useState, useEffect } from "react";
import { useWordle } from "../hooks/useWordle";
import { Tutorial } from "./modal/tutorial/Tutorial";
import Navigation from "./navigation/Navigation";
import Grid from "./Grid";
import Keyboard from "./keyboards/Keyboard";
import ResultsModal from "./modal/game-results/ResultsModal";

import "./Wordle.scss";

interface IWordle {
  solution: string;
  generateNewSolution: () => void;
}

const Wordle = ({ solution, generateNewSolution }: IWordle) => {
  const {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    gamesHistory,
    gameFinished,
    setGameFinished,
    handleKeyUp,
    restartGame,
  } = useWordle(solution);
  const [showModal, setShowModal] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);
  // const [showTutorial, setShowTutorial] = useState(
  //   localStorage.getItem("leet_showTutorial") === "true" || false
  // );

  const playAgain = () => {
    generateNewSolution();
    setShowModal(false);
    restartGame();
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect || turn > 5) {
      setTimeout(() => {
        setShowModal(true);
        setGameFinished(true);
      }, 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, setGameFinished, turn]);

  return (
    <div className="wordle">
      <Navigation history={gamesHistory} />
      <div className="game">
        <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
        <Keyboard usedKeys={usedKeys} handleKey={() => handleKeyUp} />
        {gameFinished && showModal && (
          <ResultsModal
            closeModal={() => setShowModal(false)}
            isCorrect={isCorrect}
            turn={turn}
            solution={solution}
            playAgain={playAgain}
            gameFinished={gameFinished}
          />
        )}
      </div>
      {showTutorial && (
        <Tutorial
          closeTutorial={() => setShowTutorial(false)}
          showTutorial={showTutorial}
        />
      )}
    </div>
  );
};

export default Wordle;
