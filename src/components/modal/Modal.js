import React from "react";
import GameWin from "./GameWin";
import GameLose from "./GameLose";
import { NewGameButton } from "./NewGameButton";
import "./Modal.scss";

const Modal = ({ closeModal, isCorrect, turn, solution }) => {
  const restartGame = () => {
    console.log("restarting game");
  };

  return (
    <div className="wrapper" onClick={closeModal}>
      <div className="modal">
        {isCorrect ? <GameWin turn={turn} solution={solution} /> : <GameLose solution={solution} />}
        <NewGameButton restartGame={restartGame} />
      </div>
    </div>
  );
};

export default Modal;
