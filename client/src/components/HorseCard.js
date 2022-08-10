import React from "react";
import clsx from "clsx";

import styles from "./HorseCard.module.css";

const HorseCard = ({ id, name, distance }) => {
  return (
    <div
      className={clsx({
        [styles.container]: true,
        [styles.winner]: distance === 1000,
      })}
      key={id}
    >
      {distance === 1000 && <p className={styles.label}>Winner</p>}
      <h1>{name} </h1>
      <h1>{distance}</h1>
    </div>
  );
};

export default HorseCard;
