import React from "react";

const AdvancedKeyboard = ({ usedKeys }) => {
  return (
    <div className="advanced-keyboard">
      <div className="row">
        <div className="box">Q</div>
        <div className="box">W</div>
        <div className="box">E</div>
        <div className="box">R</div>
        <div className="box">T</div>
        <div className="box">Y</div>
        <div className="box">I</div>
        <div className="box">O</div>
        <div className="box">P</div>
        <div className="box">U</div>
      </div>
      <div className="row">
        <div className="box">A</div>
        <div className="box">S</div>
        <div className="box">D</div>
        <div className="box">F</div>
        <div className="box">G</div>
        <div className="box">H</div>
        <div className="box">J</div>
        <div className="box">K</div>
        <div className="box">L</div>
      </div>
      <div className="row">
        <div className="box action enter">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <div className="box">Z</div>
        <div className="box">X</div>
        <div className="box">C</div>
        <div className="box">V</div>
        <div className="box">B</div>
        <div className="box">N</div>
        <div className="box">M</div>
        <div className="box action backspace">
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AdvancedKeyboard;
