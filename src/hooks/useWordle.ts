import { useState } from "react";
import { IFormatedGuess, IGameHistory, IUsedKeys } from "../types/types";

export const useWordle = (solution: string) => {
  const [turn, setTurn] = useState<number>(0); /* 1 to 6 */
  const [currentGuess, setCurrentGuess] =
    useState<string>(""); /* string guess */
  const [guesses, setGuesses] = useState([
    ...Array(6),
  ]); /* array of formatted guesses */
  const [history, setHistory] = useState<string[]>(
    []
  ); /* string words history */
  const [gamesHistory, setGamesHistory] = useState<IGameHistory[]>(
    []
  ); /* History for all games */
  const [isCorrect, setIsCorrect] =
    useState<boolean>(false); /* game finish logic */
  const [usedKeys, setUsedKeys] = useState<IUsedKeys>({}); // {a: 'green', b: 'yellow', c: 'greflamey'}
  const [gameFinished, setGameFinished] = useState<boolean>(false);

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
  const addNewGuess = (formattedGuess: IFormatedGuess[]) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
      setGameFinished(true);
    }

    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prevHistory: string[]) => [...prevHistory, currentGuess]);

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });

    /* working on keyboard colors */
    setUsedKeys((prevUsedKeys: IUsedKeys) => {
      let newKeys = { ...prevUsedKeys };

      formattedGuess.forEach((l: IFormatedGuess) => {
        // const currentLetter = l.key as undefined as IndexType;
        const currentColor = newKeys[l.key as keyof typeof newKeys];

        /* l.key -> is a letter like a, b, c || l.color is a color asigned to a letter */
        /* if the property exists we are overriding a prev value */
        if (l.color === "green") {
          newKeys[l.key as keyof typeof newKeys] = "green";
          return;
        }

        if (l.color === "yellow" && currentColor !== "green") {
          newKeys[l.key as keyof typeof newKeys] = "yellow";
          return;
        }

        if (l.color === "grey" && currentColor !== ("green" || "yellow")) {
          newKeys[l.key as keyof typeof newKeys] = "grey";
          return;
        }
      });

      // console.log("Formatted guess:", formattedGuess);

      return newKeys;
    });

    setCurrentGuess("");
  };

  /* Handle key-up events (ENTER - Add new guess) */
  const handleKeyUp = ({ key }: any) => {
    // console.log("handleKeyUp, key:", key);

    if (key === "Enter") {
      /* Only add guess if turn is less than 5 */
      if (turn > 5) {
        // console.log("You used all your guesses");
        return;
      }

      /* Do not allow duplicate words */
      if (history.includes(currentGuess)) {
        // console.log("You already submitted this word");
        return;
      }

      /* Word is 5 characters long */
      if (currentGuess.length !== 5) {
        // console.log(`Current guess isn't 5 characters long`);
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

  /* Save Game */
  const saveGameStats = () => {
    const gameHistory = {
      time: Date.now(),
      win: isCorrect,
      finishedOnTurn: turn,
      turns: guesses,
    };

    setGamesHistory((prevHistory) => [gameHistory, ...prevHistory]);

    /* save to local storage */
    // localStorage.setItem("gameHistory", [...gamesHistory]);
  };

  /* Restart Game Logic */
  const restartGame = () => {
    saveGameStats();

    setTurn(0);
    setCurrentGuess("");
    setHistory([]);
    setGuesses([...Array(6)]);
    setUsedKeys({});
    setGameFinished(false);
    setIsCorrect(false);
    // window.removeEventListener("keyup", handleKeyUp);
    // console.log("gameFinished: ", gameFinished);
    // console.log("Turns: ", turn);
    console.log("Guesses Array (6): ", guesses);
    console.log("Used keys", usedKeys);
    console.log("History: ", history);
    console.log("Games history:", gamesHistory);
    // console.log("*** reseting finished:");
    // console.log("** Restart Game Function Ended");
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    gamesHistory,
    gameFinished,
    setGameFinished,
    handleKeyUp,
    restartGame,
  };
};
