import React, { useState, useEffect, createContext } from "react";
import { words } from "./data/words.js";
import Wordle from "./components/Wordle";
import "./App.scss";

const gameInfoContext = createContext();

const App = () => {
  const [solution, setSolution] = useState(null);

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
