import React from "react";
import styles from "./footer.module.css";
import { HeartLogo } from "../Logos/Heart-Logo";
import { CopyrightLogo } from "../Logos/Copyright-Logo";
export const Footer = (props) => {
  return (
    <footer className={styles.wrapper}>
      <section className={styles.container}>
        <div>
          Made with <HeartLogo /> by JK
        </div>
        <span className={styles.divider} />
        <div>
          <CopyrightLogo /> Konnect 2020
        </div>
      </section>
    </footer>
  );
};
