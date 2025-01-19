import React from "react";
import { Link } from "react-router-dom";

import styles from "./SubNav.module.css";
import symbols from "../../../images/Symbol";

export default function SubNav() {
  return (
    <nav className={styles.subNavBarContainer}>
      {<img className={styles.icon} src={symbols.sidebar} alt="sidebar" />}
      <Link to={"/users"} className={styles.navLinks}>
        Users Lists
      </Link>
      <Link to={"/chat"} className={styles.navLinks}>
        Chat
      </Link>
    </nav>
  );
}
