import React, { useState, useEffect } from "react";
import Wordle from "./components/Wordle";
import "./App.scss";

const App = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((response) => response.json())
      .then((jsonData) => {
        /* random int between 0 -> jsonData.length - 1 */
        const randomSolution =
          jsonData[Math.floor(Math.random() * jsonData.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <div className="application">
      {solution && <Wordle solution={solution} />}
    </div>
  );
};

export default App;
