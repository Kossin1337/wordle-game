import React, { useState } from "react";
import "./Tutorial.scss";
import { Modal } from "../Modal";

interface ITutorial {
  closeTutorial: () => void;
  showTutorial: boolean;
}

export const Tutorial = ({ showTutorial, closeTutorial }: ITutorial) => {
  const [checkbox, setCheckbox] = useState<boolean>(true);

  const hideTutorial = () => {
    /* save it to local storage */
    if (checkbox) localStorage.setItem("leet_showTutorial", "false"); // figure out a way to change "false" to false (from string to boolean)
    console.log(
      "Tutorial > hideTutorial > localStorage(leet_showTutorial):",
      localStorage.getItem("leet_showTutorial")
    );

    closeTutorial();
  };

  console.log("Current state of tutorial: ", showTutorial);

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

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
        <button className="close" onClick={hideTutorial}>
          <span className="text">Hide tutorial</span>
        </button>
        <div className="hideTutorial">
          <input
            type="checkbox"
            id="checkbox"
            name="tutorial-checkbox"
            value={checkbox ? "si" : "no"}
            onChange={handleCheckbox}
          />
          <label htmlFor="checkbox">I get it. Disable the hints</label>
        </div>
      </div>
    </Modal>
  );
};
