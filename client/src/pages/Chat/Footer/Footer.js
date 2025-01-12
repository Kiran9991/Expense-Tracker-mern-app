import React, { useContext, useRef } from "react";

import styles from '../Chat.module.css';
import Button from "../../../components/Button";
import postMessageApi from "../../../apis/ChatApi";
import { chatContext } from "../../../store/Chat";

export default function Footer() {
  const { addChats } = useContext(chatContext);
  const enteredTextRef = useRef();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    let message = enteredTextRef.current.value;
    const data = await postMessageApi(message);
    addChats(data);
    enteredTextRef.current.value = '';
  };

  return (
    <div className={styles.footer}>
      <input
        type="text"
        className={styles.input}
        ref={enteredTextRef}
        placeholder="Type a message here..."
      />
      <button className={styles.sendButton} type="submit" onClick={submitFormHandler}>
        Send
      </button>
    </div>
  );
}
