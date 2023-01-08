import React from "react";
import Overlay from "./Overlay";
import { createPortal } from "react-dom";

import styles from "./modal.module.css";

const Modal = (props) => {
  return (
    <>
      <div className={styles.modal}>{props.children}</div>
      {createPortal(<Overlay />, document.body)}
    </>
  );
};

export default Modal;
