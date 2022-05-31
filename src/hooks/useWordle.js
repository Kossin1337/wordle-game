import { useState } from "react";

export const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([
    ...Array(6),
  ]); /* array of formatted guesses */
  const [history, setHistory] = useState([]); /* string history */
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({}); // {a: 'green', b: 'yellow', c: 'greflamey'}

  /* formatting a guess into an array of letter objects -> [{key: 'a', color: 'yellow'}] */
  const formatGuess = () => {
    const formattedArray = [];

    for (let i = 0; i < currentGuess.length; i++) {
      let color; /* green  yellow  gray  */

      if (currentGuess[i] === solution[i]) {
        color = "green"; // correct position
      } else if (solution.includes(currentGuess[i])) {
        color = "yellow"; // wrong position (is in a word)
      } else {
        color = "gray"; // wrong guess (not in a word)
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
    setUsedKeys((prevKeys) => {
      console.log(currentGuess);
      const guessLetters = [...currentGuess];
      const solutionLetters = [...solution];
      console.log(`solution: ${solution}`);
      console.log(`solutionLetters: ${solutionLetters}`);
      console.log(guessLetters);

      guessLetters.map((letter, index) => {
        if (solutionLetters.includes(letter)) {
        }
      });
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

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp, usedKeys };
};
