import React from "react";
import { Modal } from "../Modal";
import "./Settings.scss";

interface ISettings {
  closeModal: () => void;
}

export const Settings = ({ closeModal }: ISettings) => {
  return (
    <Modal closeModal={closeModal}>
      <div className="settings content">
        <span className="title">Settings</span>
        <span className="info">Development in progress</span>
      </div>
    </Modal>
  );
};
