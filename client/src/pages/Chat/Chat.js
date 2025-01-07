import React from "react";

import styles from "./Chat.module.css";

export default function Chat() {
    return (
      <div>

      <div className={styles.container}>
      <div className={styles.header}>Chat with users</div>
      <div className={styles.footer}>
        <input type="text" className={styles.input} />
        <button className={styles["send-button"]}>Send</button>
      </div>
    </div>
      </div>
  );
}
