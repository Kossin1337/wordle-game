import React, { useState, useEffect, createContext, Context } from "react";
import { words } from "./data/words.js";
import Wordle from "./components/Wordle";
import { IGameContext } from "./types/types.js";
import "./App.scss";

const defaultGameContext = {
  totalGames: 0,
  wins: 0,
  gamesHistory: [],
  userInfo: {
    darkTheme: true,
    showTutorial: true,
  },
};

export const GameContext = createContext<IGameContext | null>(null);

const App = () => {
  const [gameInfo, setGameInfo] = useState<IGameContext>(defaultGameContext);
  const [solution, setSolution] = useState<string | null>(null);

  const generateWord = () => {
    const newWordsIndex = Math.floor(Math.random() * words.length);
    const newWord = words[newWordsIndex];
    return newWord;
  };

  useEffect(() => {
    generateNewSolution();
  }, [setSolution]);

  /* load wordle context data from local storage */
  useEffect(() => {
    // check if we have the data
    // if we have if - setGameInfo() with that data
    // if we don't have it - create leet_gamesdata local storage
    // and load it with the defaultGameContext value

    const gameInfoData = localStorage.getItem("leet_gamesdata");

    if (gameInfoData) {
      const data = JSON.parse(gameInfoData);
      console.log("Local storage (leet_gamesdata): ", data);
      setGameInfo(data);
    } else {
      localStorage.setItem(
        "leet_gamesdata",
        JSON.stringify(defaultGameContext)
      );
      setGameInfo(defaultGameContext);
    }
  }, []);

  /* save data to localStorage everytime gameInfo changes */
  useEffect(() => {
    localStorage.setItem("leet_gamesdata", JSON.stringify(gameInfo));
  }, [gameInfo]);

  console.log(`Solution: `, solution);

  const generateNewSolution = () => {
    const newSolution = generateWord();
    setSolution(newSolution);
  };

  return (
    <GameContext.Provider value={gameInfo}>
      <div className="application">
        {solution && (
          <Wordle
            solution={solution}
            generateNewSolution={generateNewSolution}
          />
        )}
      </div>
    </GameContext.Provider>
  );
};

export default App;
