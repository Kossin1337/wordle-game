import React from "react";
import { IFormatedGuess } from "../types/types";

interface IRow {
  guess?: IFormatedGuess[];
  currentGuess?: string;
}

const Row = ({ guess, currentGuess }: IRow) => {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((letter: { key: string; color: string }, index: number) => {
          return (
            <div className={`square ${letter.color}`} key={index}>
              {letter.key}
            </div>
          );
        })}
      </div>
    );
  }

  /* checking a current guess */
  if (currentGuess) {
    let letters = currentGuess.split("");

    return (
      <div className="row current">
        {letters.map((letter: string, index: number) => {
          return (
            <div className="square filled" key={`${index} filled`}>
              {letter}
            </div>
          );
        })}
        {[...Array(5 - letters.length)].map((_, index) => {
          return <div className="square" key={`${index} empty`}></div>;
        })}
      </div>
    );
  }

  return (
    <div className="row">
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
    </div>
  );
};

export default Row;
