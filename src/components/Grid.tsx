import React from "react";
import Row from "./Row";
import { IFormatedGuess } from "../types/types";

interface IGrid {
  guesses: IFormatedGuess[][];
  currentGuess: string;
  turn: number;
}

const Grid = ({ guesses, currentGuess, turn }: IGrid) => {
  console.log("Grid guesses:", guesses);

  return (
    <div className="grid">
      {guesses.map((guess: IFormatedGuess[], index: number) => {
        if (turn === index) {
          return <Row currentGuess={currentGuess} key={index} />;
        }
        return <Row guess={guess} key={index} />;
      })}
    </div>
  );
};

export default Grid;
