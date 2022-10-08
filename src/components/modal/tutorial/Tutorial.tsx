import React, { useContext } from "react";
import { Modal } from "../Modal";
import { GameContext } from "../../../App";
import "./Tutorial.scss";

interface ITutorial {
  closeTutorial: () => void;
  showTutorial: boolean;
}

export const Tutorial = ({ showTutorial, closeTutorial }: ITutorial) => {
  const game = useContext(GameContext);

  const hideTutorial = () => {
    if (!game?.setGameInfo) return;

    game.setGameInfo((prevState) => {
      const newState = { ...prevState };
      newState.userInfo.showTutorial = false;
      return newState;
    });

    closeTutorial();
  };

  if (!game?.gameInfo?.userInfo.showTutorial) return <></>;

  return (
    <Modal closeModal={closeTutorial}>
      <div className="tutorial">
        <div className="title">Quick Tutorial</div>
        <div className="row">
          <div className="tile past grey">
            <span className="letter">S</span>
          </div>
          <span className="info">not in the word</span>
        </div>
        <div className="row">
          <div className="tile yellow">
            <span className="letter">U</span>
          </div>
          <span className="info">On another position</span>
        </div>
        <div className="row">
          <div className="tile green">
            <span className="letter">P</span>
          </div>
          <span className="info">EXACLY!</span>
        </div>
        <button className="close" onClick={() => closeTutorial()}>
          <span className="text">Hide tutorial</span>
        </button>
        <div className="hideTutorial" onClick={hideTutorial}>
          <span className="text">I get it. Disable the hints</span>
        </div>
      </div>
    </Modal>
  );
};
