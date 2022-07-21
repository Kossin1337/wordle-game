import React from "react";

const Enter = ({ checkWord }) => {
  return (
    <div
      className="key action enter"
      onClick={() => checkWord({ key: "Enter" })}
    >
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
  );
};

export default Enter;
