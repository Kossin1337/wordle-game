import React, { useState, useEffect } from "react";

export const useStats = (history) => {
  const gamesData = {
    wins: 0,
    loses: 0,
    turns: {},
  };

  useEffect(() => {
    history.map((game) => {
      game.win ? gamesData.wins++ : gamesData.loses++;
    });
  }, [historym, gamesData.loses, gamesData.wins]);

  return { gamesData };
};
