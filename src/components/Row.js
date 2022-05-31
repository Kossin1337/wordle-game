import React from "react";

const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((letter, index) => {
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
        {letters.map((letter, index) => {
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
