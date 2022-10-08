import React from "react";

interface IPlayAgainButton {
  playAgain: () => void;
}

export const PlayAgainButton = ({ playAgain }: IPlayAgainButton) => {
  return (
    <button className="restart" onClick={() => playAgain()}>
      <span className="text">Play Again</span>
    </button>
  );
};
