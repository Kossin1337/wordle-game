import React from "react";
import Row from "./Row";

const Grid = ({ guesses, currentGuess, turn }) => {
  return (
    <div className="grid">
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Row currentGuess={currentGuess} key={index} />;
        }
        return <Row guess={guess} key={index} />;
      })}
    </div>
  );
};

export default Grid;
