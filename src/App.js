import React from "react";
import "./media-query.css";
import styles from "./app.module.css";
import mySvg from "./svg/tree.svg";
import { MenuBar } from "./components/Menu-Bar";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <MenuBar />
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${mySvg})` }}
      >
        <div className={styles.container}>
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
