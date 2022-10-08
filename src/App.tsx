import React, { useState, useEffect, createContext } from "react";
import { words } from "./data/words.js";
import Wordle from "./components/Wordle";
import { IGameInfo } from "./types/types.js";
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

interface IContextInterface {
  gameInfo?: IGameInfo;
  setGameInfo?: React.Dispatch<React.SetStateAction<IGameInfo>>;
}

export const GameContext = createContext<IContextInterface | null>(null);

const App = () => {
  const [gameInfo, setGameInfo] = useState<IGameInfo>(defaultGameContext);
  const [solution, setSolution] = useState<string | null>(null);
  const gameInfoContextValue = { gameInfo, setGameInfo };

  const generateWord = () => {
    const newWordsIndex = Math.floor(Math.random() * words.length);
    const newWord = words[newWordsIndex];
    return newWord;
  };

  /* GENERATE SOLUTION */
  useEffect(() => {
    generateNewSolution();
  }, [setSolution]);

  /* LOAD GAME CONTEXT FROM LOCAL STORAGE */
  useEffect(() => {
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

  /* SAVE DATA TO LOCAL STORAGE */
  useEffect(() => {
    localStorage.setItem("leet_gamesdata", JSON.stringify(gameInfo));
    console.log("Game Info:", gameInfo);
  }, [setGameInfo]);

  console.log(`Solution: `, solution);

  const generateNewSolution = () => {
    const newSolution = generateWord();
    setSolution(newSolution);
  };

  return (
    <GameContext.Provider value={gameInfoContextValue}>
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
