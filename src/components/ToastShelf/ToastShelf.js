import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ items, setItems }) {
  function handleRemoval(currVariant) {
    let newItems = items.filter(({ variant }) => variant !== currVariant);
    setItems(newItems);
  }
  return (
    <ol className={styles.wrapper}>
      {items.map(({ id, textBox, variant }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              variant={variant}
              textBox={textBox}
              handleRemoval={handleRemoval}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
