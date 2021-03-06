import React, { useState } from "react";

const lettersArray = [
  { key: "a" },
  { key: "b" },
  { key: "c" },
  { key: "d" },
  { key: "e" },
  { key: "f" },
  { key: "g" },
  { key: "h" },
  { key: "i" },
  { key: "j" },
  { key: "k" },
  { key: "l" },
  { key: "m" },
  { key: "n" },
  { key: "o" },
  { key: "p" },
  { key: "q" },
  { key: "r" },
  { key: "s" },
  { key: "t" },
  { key: "u" },
  { key: "v" },
  { key: "w" },
  { key: "x" },
  { key: "y" },
  { key: "z" },
];

const AlphabeticalKeyboard = ({ usedKeys }) => {
  const [letters, setLetters] = useState(lettersArray);

  return (
    <div className="keypad">
      {letters.map((letter) => {
        const color = usedKeys[letter.key];

        return (
          <div className={`letter ${color}`} key={letter.key}>
            {letter.key}
          </div>
        );
      })}
    </div>
  );
};

export default AlphabeticalKeyboard;
