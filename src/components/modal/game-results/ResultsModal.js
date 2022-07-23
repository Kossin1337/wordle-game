import React from "react";
import GameWin from "./GameWin";
import GameLose from "./GameLose";
import { PlayAgainButton } from "./PlayAgainButton";
import "./ResultsModal.scss";

const ResultsModal = ({
  closeModal,
  isCorrect,
  turn,
  solution,
  playAgain,
  gameFinished,
}) => {
  return (
    <div className="wrapper" onClick={closeModal}>
      {gameFinished && (
        <div className="modal">
          {isCorrect ? (
            <GameWin turn={turn} solution={solution} />
          ) : (
            <GameLose solution={solution} />
          )}

          <PlayAgainButton playAgain={playAgain} />
        </div>
      )}
    </div>
  );
};

export default ResultsModal;
