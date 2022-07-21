import React from "react";
import { Modal } from "../Modal";
import "./Statistics.scss";

export const Statistics = ({ closeModal, history }) => {
  const totalGames = history.length;
  const gamesData = {
    wins: 0,
    loses: 0,
    turns: {},
  };
  history?.map((game) => {
    game.win ? gamesData.wins++ : gamesData.loses++;
    
  });
  return (
    <Modal closeModal={closeModal}>
      <div className="stats content">
        <span className="title">Statistics</span>
        <span className="info">Development in progress</span>
        <div className="history">{JSON.stringify(history)}</div>
      </div>
    </Modal>
  );
};
