import React, { useContext } from "react";

import styles from "./Chat.module.css";
import Footer from "./Footer/Footer";
import DisplayContent from "./Display/DisplayContent";

export default function Chat() {

  return (
    <div>
      <form className={styles.container}>
        <div className={styles.header}>Chat with users</div>
        <DisplayContent/>
        <Footer/>
      </form>
    </div>
  );
}
