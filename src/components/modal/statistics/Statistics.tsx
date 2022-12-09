import React, { useContext } from "react";
import { Modal } from "../Modal";
import { IGameHistory } from "../../../types/types";
import { GameContext } from "../../../App";
import "./Statistics.scss";

interface IStatistics {
  closeModal: () => void;
  history: IGameHistory[];
}

export const Statistics = ({ closeModal, history }: IStatistics) => {
  const game = useContext(GameContext);

  if (!game) return null;
  const { totalGames, wins, gamesHistory } = game?.gameInfo;

  const totalTurnsMade = gamesHistory.reduce(
    (prev, current) => prev + current?.finishedOnTurn,
    0
  );

  const resetStatistics = () => {
    game?.setGameInfo((prevGameInfo) => {
      const newGameInfo = prevGameInfo;
      newGameInfo.totalGames = 0;
      newGameInfo.wins = 0;
      newGameInfo.gamesHistory = [];

      return newGameInfo;
    });

    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="stats content">
        <span className="title">Statistics</span>
        <section className="section">
          <div className="win-rate full-box box">
            <span className="stats-title">WIN RATE</span>
            {wins ? (
              <span className="main-text">{(wins / totalGames) * 100}% </span>
            ) : (
              <span className="main-text">-</span>
            )}
          </div>
          <div className="win small-box box">
            <span className="stats-title">WINS</span>
            <span className="main-text">{wins}</span>
          </div>
          <div className="lose small-box box">
            <span className="stats-title">LOSES </span>
            <span className="main-text"> {totalGames - wins}</span>
          </div>
          <div className="win-rate full-box box">
            <span className="stats-title">AVG TURNS</span>
            {wins ? (
              <span className="main-text">{totalTurnsMade / totalGames} </span>
            ) : (
              <span className="main-text">-</span>
            )}
          </div>
        </section>
        <button className="clear-btn" onClick={resetStatistics}>
          Clear my stats
        </button>
        {/* <span className="info">Development in progress</span> */}
      </div>
    </Modal>
  );
};
