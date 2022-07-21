import React from "react";
import "./Modal.scss";

export const Modal = ({ closeModal, children }) => {
  return (
    <div className="wrapper" onClick={closeModal}>
      <div className="modal">{children}</div>
    </div>
  );
};
