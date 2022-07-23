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

  // useEffect(() => {
  //   fetch("http://localhost:3001/solutions")
  //     .then((response) => response.json())
  //     .then((jsonData) => {
  //       /* random int between 0 -> jsonData.length - 1 */
  //       const randomSolution =
  //         jsonData[Math.floor(Math.random() * jsonData.length)];
  //       setSolution(randomSolution.word);
  //     });
  // }, [setSolution]);

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
