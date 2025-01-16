import React, { useContext } from "react";

import styles from "./Chat.module.css";
import Footer from "./Footer/Footer";
import DisplayContent from "./Display/DisplayContent";

export default function Chat() {

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '40vh', background: '#eee6da' }}>
        <div style={{ textAlign: 'center', fontSize: 'larger'}}>User list</div>
      </div>
      <form className={styles.container}>
        <div className={styles.header}>Chat with users</div>
        <DisplayContent/>
        <Footer/>
      </form>
    </div>
  );
}
