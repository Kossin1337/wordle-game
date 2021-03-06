import React, { useState, useEffect } from "react";
import { useWordle } from "../hooks/useWordle";
import Navigation from "./navigation/Navigation";
import Grid from "./Grid";
import AdvancedKeyboard from "./keyboards/AdvancedKeyboard";
import ResultsModal from "./modal/game-results/ResultsModal";

import "./Wordle.scss";

const Wordle = ({ solution, generateNewSolution }) => {
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

  const playAgain = async () => {
    console.log("* Play Again function fired");
    await generateNewSolution();
    await restartGame();
    setShowModal(false);
    console.log("* Play Again function ended");
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
        <AdvancedKeyboard usedKeys={usedKeys} handleKey={handleKeyUp} />
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
    </div>
  );
};

export default Wordle;
