import React, { useState, useContext } from "react";
import { Modal } from "../Modal";
import { GameContext } from "../../../App";
import "./Tutorial.scss";

interface ITutorial {
  closeTutorial: () => void;
  showTutorial: boolean;
}

export const Tutorial = ({ showTutorial, closeTutorial }: ITutorial) => {
  const gameInfo = useContext(GameContext);

  const hideTutorial = () => {
    // /* save it to local storage */
    if(gameInfo) {
      
    } 
    // console.log(`Tutorial info: `, gameInfo);
    // if (gameInfo) {
    //   gameInfo.wins = 100;
    // }
    // console.log(`Tutorial info: `, gameInfo);

    // localStorage.setItem("leet_showTutorial", "false"); // figure out a way to change "false" to false (from string to boolean)
    // console.log(
    //   "Tutorial > hideTutorial > localStorage(leet_showTutorial):",
    //   localStorage.getItem("leet_showTutorial")
    // );

    closeTutorial();
  };

  console.log("Current state of tutorial: ", showTutorial);

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
