import React from "react";
import styles from "./footer.module.css";
import { HeartLogo } from "../HeartLogo";
import { CopyrightLogo } from "../CopyrightLogo";
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
