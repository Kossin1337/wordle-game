import React from "react";
import GameWin from "./GameWin";
import GameLose from "./GameLose";
import "./Modal.scss";

const Modal = ({ closeModal, isCorrect, turn, solution }) => {
  return (
    <div className="modal">
      {isCorrect ? <GameWin turn={turn} /> : <GameLose solution={solution} />}
    </div>
  );
};

export default Modal;
