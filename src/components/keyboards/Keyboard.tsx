import React from "react";
import Enter from "./Enter";
import Backspace from "./Backspace";
import { IUsedKeys } from "../../types/types";

const keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"],
];

interface IKeyboard {
  usedKeys: IUsedKeys;
  handleKey: ({ key }: KeyboardEvent | { key?: string }) => void;
}

const Keyboard = ({ usedKeys, handleKey }: IKeyboard) => {
  const handleKeyPress = (event: any) => {
    // const isDisabled = event.target.dataset.disabled;
    // if (event.target instanceof Element) {
    //   console.log("handleKeyPress (e.target.key)", event.target);
    // }

    handleKey({
      key: event.target.innerText,
    });
  };

  return (
    <div className="advanced-keyboard">
      {keyboard.map((row: string[], index: number) => {
        return (
          <div className="row" key={index}>
            {row.map((key) => {
              if (key === "enter")
                return <Enter key={key} handleKey={handleKey} />;
              if (key === "backspace")
                return <Backspace key={key} handleKey={handleKey} />;

              const color = usedKeys[key as keyof typeof usedKeys];
              return (
                <div
                  className={`key ${color}`}
                  data-disabled={color === "grey" ? true : false}
                  key={key}
                  onClick={(e) => handleKeyPress(e)}
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

export default Keyboard;
