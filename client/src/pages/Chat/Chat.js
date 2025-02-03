import React, { useContext } from "react";

import styles from "./Chat.module.css";
import Footer from "./Footer/Footer";
import DisplayContent from "./Display/DisplayContent";
import ChatSideBar from "./ChatSideBar";

export default function Chat() {
  return (
    <div className="flex justify-center ">
      <ChatSideBar/>
    <div className="w-[130vh]
     h-[80vh] relative border
      border-[rgb(197,195,195)]
"
    style={{background: 'var(--body_background)',
      color:"var(--body_color)"}}
    >
        <div className={styles.header}>Chat with users</div>
        <DisplayContent />
        <Footer />
      </div>
      </div>
  );
}
