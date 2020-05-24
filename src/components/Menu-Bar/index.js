import React from "react";
import styles from "./menu-bar.module.css";
import { KonnectLogo } from "../Logo";

export const MenuBar = (props) => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <KonnectLogo />
      </div>
      <ul className={styles.listItemsContainer}>
        <li>first</li>
        <li>sec</li>
        <li>third</li>
      </ul>
    </header>
  );
};
