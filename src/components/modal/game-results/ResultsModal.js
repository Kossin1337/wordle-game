import React, { useEffect } from "react";
import GameWin from "./GameWin";
import GameLose from "./GameLose";
import { PlayAgainButton } from "./PlayAgainButton";
import "./ResultsModal.scss";
import ReactDOM from "react-dom";

const ResultsModal = ({
  closeModal,
  isCorrect,
  turn,
  solution,
  playAgain,
  gameFinished,
}) => {
  if (!gameFinished) return null;
  if (!isCorrect) return null;
  
  return ReactDOM.createPortal(
    <div className="wrapper" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {isCorrect ? (
          <GameWin turn={turn} solution={solution} />
        ) : (
          <GameLose solution={solution} />
        )}

        <PlayAgainButton playAgain={playAgain} />
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default ResultsModal;
