import React from "react";
import ReactDOM from "react-dom";

const GameLose = ({ solution }) => {
  return ReactDOM.createPortal(
    <div className="lose">
      <span className="title">YOU LOST</span>
      <div className="info">
        <span className="info-text">Correct Solution</span>
        <span className="solution">{solution}</span>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default GameLose;
