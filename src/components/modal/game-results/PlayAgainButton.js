import React from "react";

export const PlayAgainButton = ({ playAgain }) => {
  return (
    <button className="restart" onClick={() => playAgain()}>
      <span className="text">Play Again</span>
    </button>
  );
};
