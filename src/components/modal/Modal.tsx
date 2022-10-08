import React from "react";
import "./Modal.scss";

interface IModal {
  closeModal: () => void;
  children: JSX.Element;
}

export const Modal = ({ closeModal, children }: IModal) => {
  return (
    <div className="wrapper" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
