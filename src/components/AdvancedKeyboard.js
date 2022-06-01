import React from "react";

const AdvancedKeyboard = ({ usedKeys }) => {
  return (
    <div className="advanced-keyboard">
      <div className="row">
        <div className="key">Q</div>
        <div className="key">W</div>
        <div className="key">E</div>
        <div className="key">R</div>
        <div className="key">T</div>
        <div className="key">Y</div>
        <div className="key">I</div>
        <div className="key">O</div>
        <div className="key">P</div>
        <div className="key">U</div>
      </div>
      <div className="row">
        <div className="key">A</div>
        <div className="key">S</div>
        <div className="key">D</div>
        <div className="key">F</div>
        <div className="key">G</div>
        <div className="key">H</div>
        <div className="key">J</div>
        <div className="key">K</div>
        <div className="key">L</div>
      </div>
      <div className="row">
        <div className="key action enter">
          <svg
            className="w-6 h-6 enter-svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <div className="key">Z</div>
        <div className="key">X</div>
        <div className="key">C</div>
        <div className="key">V</div>
        <div className="key">B</div>
        <div className="key">N</div>
        <div className="key">M</div>
        <div className="key action backspace">
          <svg
            className="w-6 h-6 backspace-svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AdvancedKeyboard;
