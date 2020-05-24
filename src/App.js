import React from "react";
import "./media-query.css";
import styles from "./app.module.css";
import mySvg from "./svg/tree.svg";
import { MenuBar } from "./components/Menu-Bar";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { getAboutUs } from "./data-generators/about-us";
import { getWhyUs } from "./data-generators/why-us";

function App() {
  return (
    <div className={styles.topLevel}>
      <MenuBar />
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${mySvg})` }}
      >
        <div className={styles.container}>
          <Card>{getAboutUs()}</Card>
          <Card>{getWhyUs()}</Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
