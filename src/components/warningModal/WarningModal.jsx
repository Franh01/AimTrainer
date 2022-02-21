import React from "react";
import s from "./WarningModal.module.css";
import warningImg from "../../img/warning.svg";

export const WarningModal = ({ content, opacity }) => {
  return (
    <div className={s.container} style={{ opacity: opacity }}>
      <div className={s.content}>
        <img className={s.warningImg} src={warningImg} alt="warningImg" />
        <h2>{content}</h2>
      </div>
    </div>
  );
};
