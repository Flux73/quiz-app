import React from "react";
import Overlay from "./Overlay";
import { createPortal } from "react-dom";

import styles from "./modal.module.css";

/* I used (createPortal) that react offers, because Modals are supposed to be at the top of the Components tree, 
which means a direct child of the <body> */

const Modal = (props) => {
  return (
    <>
      <div className={styles.modal}>{props.children}</div>
      {createPortal(<Overlay />, document.body)}
    </>
  );
};

export default Modal;
