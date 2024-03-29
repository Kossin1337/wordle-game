import React from "react";

interface IBackspace {
  handleKey: ({ key }: KeyboardEvent | { key: string }) => void;
}

const Backspace = ({ handleKey }: IBackspace) => {
  return (
    <div
      className="key action backspace"
      onClick={() => handleKey({ key: "Backspace" })}
    >
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
  );
};

export default Backspace;
