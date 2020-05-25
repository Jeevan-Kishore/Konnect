import React from "react";
import styles from "./app.module.css";
import mySvg from "./svg/tree.svg";
import { MenuBar } from "./components/Menu-Bar";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/data-components/about-us";
import { WhyUs } from "./components/data-components/why-us";
import { Intro } from "./components/data-components/intro";

function App() {
  return (
    <div className={styles.topLevel}>
      <MenuBar />
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${mySvg})` }}
      >
        <div className={styles.container}>
          <Intro />
          <Card>
            <AboutUs />
          </Card>
          <Card>
            <WhyUs />
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
