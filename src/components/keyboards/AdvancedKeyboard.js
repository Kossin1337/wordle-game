import React from "react";
import Enter from "./Enter";
import Backspace from "./Backspace";

const keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"],
];

const AdvancedKeyboard = ({ usedKeys, checkWord }) => {
  const handleKeyPress = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="advanced-keyboard">
      {keyboard.map((row, index) => {
        return (
          <div className="row" key={index}>
            {row.map((key) => {
              if (key === "enter")
                return <Enter key={key} checkWord={checkWord} />;
              if (key === "backspace") return <Backspace key={key} />;

              const color = usedKeys[key];
              return (
                <div
                  className={`key ${color}`}
                  key={key}
                  onClick={handleKeyPress}
                >
                  {key}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AdvancedKeyboard;
