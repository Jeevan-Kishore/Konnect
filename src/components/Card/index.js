import React from "react";
import PropTypes from "prop-types";
import styles from "./card.module.css";

export const Card = ({ children }) => {
  return <section className={styles.wrapper}>{children}</section>;
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
