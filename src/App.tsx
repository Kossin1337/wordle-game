import React, { useState, useEffect, createContext } from "react";
import { words } from "./data/words.js";
import Wordle from "./components/Wordle";
import "./App.scss";

// interface GameInfo {
//   totalGames: number;
//   wins: number;
// }

// const gameContextMock = {
//   totalGames: 100,
//   wins: 60,
//   gamesHistory: [{ id: 1, time: 1665067467592, win: false, turns: [] }],
// };

// const gameInfoContext = createContext(gameContextMock);

const App = () => {
  const [solution, setSolution] = useState<string | null>(null);

  const generateWord = () => {
    const newWordsIndex = Math.floor(Math.random() * words.length);
    const newWord = words[newWordsIndex];

    console.log(`newWord: `, newWord);
    return newWord;
  };

  useEffect(() => {
    generateNewSolution();
  }, [setSolution]);

  console.log(solution);

  const generateNewSolution = () => {
    console.log("** generating new solution fired");
    const newSolution = generateWord();
    setSolution(newSolution);
    console.log("** generating new solution ended");
  };

  return (
    <div className="application">
      {solution && (
        <Wordle solution={solution} generateNewSolution={generateNewSolution} />
      )}
    </div>
  );
};

export default App;
