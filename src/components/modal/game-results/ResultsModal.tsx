import React from "react";
import GameWin from "./GameWin";
import GameLose from "./GameLose";
import { PlayAgainButton } from "./PlayAgainButton";
import "./ResultsModal.scss";
import ReactDOM from "react-dom";

interface IResultsModal {
  closeModal: () => void;
  isCorrect: boolean;
  turn: number;
  solution: string;
  playAgain: () => void;
  gameFinished: boolean;
}

const ResultsModal = ({
  closeModal,
  isCorrect,
  turn,
  solution,
  playAgain,
  gameFinished,
}: IResultsModal) => {
  if (!gameFinished) return null;

  const portal = document?.getElementById("portal") as HTMLElement;

  return ReactDOM.createPortal(
    <div className="wrapper" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {gameFinished && isCorrect ? (
          <GameWin turn={turn} solution={solution} />
        ) : (
          <GameLose isCorrect={isCorrect} solution={solution} />
        )}

        <PlayAgainButton playAgain={playAgain} />
      </div>
    </div>,
    portal
  );
};

export default ResultsModal;
