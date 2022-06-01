import { useState } from "react";

export const useWordle = (solution) => {
  const [turn, setTurn] = useState(0); /* 1 to 6 */
  const [currentGuess, setCurrentGuess] = useState(""); /* string guess */
  const [guesses, setGuesses] = useState([
    ...Array(6),
  ]); /* array of formatted guesses */
  const [history, setHistory] = useState([]); /* string words history */
  const [isCorrect, setIsCorrect] = useState(false); /* game finish logic */
  const [usedKeys, setUsedKeys] = useState({}); // {a: 'green', b: 'yellow', c: 'greflamey'} 

  /* formatting a guess into an array of letter objects -> [{key: 'a', color: 'yellow'}] */
  const formatGuess = () => {
    const formattedArray = [];

    for (let i = 0; i < currentGuess.length; i++) {
      let color; /* green  yellow  grey  */

      if (currentGuess[i] === solution[i]) {
        color = "green"; // correct position
      } else if (solution.includes(currentGuess[i])) {
        color = "yellow"; // wrong position (is in a word)
      } else {
        color = "grey"; // wrong guess (not in a word)
      }

      formattedArray.push({ key: currentGuess[i], color: color });
    }

    return formattedArray;
  };

  /* add new guess to guesses state */
  /* update the isCorrect state if the guess is correct */
  /* Add one to the turn state */
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }

    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prevHistory) => [...prevHistory, currentGuess]);

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });

    /* working on keyboard colors */
    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };
      console.log(newKeys);

      formattedGuess.forEach((l) => {
        const currentColor = newKeys[l.key];

        /* l.key -> is a letter like a, b, c || l.color is a color asigned to a letter */
        /* if the property exists we are overriding a prev value */
        if (l.color === "green") {
          newKeys[l.key] = "green";
          return;
        }

        if (l.color === "yellow" && currentColor !== "green") {
          newKeys[l.key] = "yellow";
          return;
        }

        if (l.color === "grey" && currentColor !== ("green" || "yellow")) {
          newKeys[l.key] = "grey";
          return;
        }
      });

      return newKeys;
    });

    setCurrentGuess("");
  };

  /* Handle key-up events (ENTER - Add new guess) */
  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      /* Only add guess if turn is less than 5 */
      if (turn > 5) {
        console.log("You used all your guesses");
        return;
      }

      /* Do not allow duplicate words */
      if (history.includes(currentGuess)) {
        console.log("You already submitted this word");
        return;
      }

      /* Word is 5 characters long */
      if (currentGuess.length !== 5) {
        console.log(`Current guess isn't 5 characters long`);
        return;
      }

      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
    }

    if (key === "Backspace") {
      return setCurrentGuess((prevLetters) => prevLetters.slice(0, -1));
    }

    /* regex expression checking if key is a letter */
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prevLetters) => prevLetters + key);
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp };
};
