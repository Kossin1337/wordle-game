import React from "react";
import { Modal } from "../Modal";
import "./Settings.scss";

export const Settings = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <div className="settings content">
        <span className="title">Settings</span>
        <span className="info">Development in progress</span>
      </div>
    </Modal>
  );
};
