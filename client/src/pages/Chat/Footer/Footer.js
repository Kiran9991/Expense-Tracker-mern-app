import React, { useContext, useEffect, useRef } from "react";

import styles from "../Chat.module.css";
import Button from "../../../components/Button";
import postMessageApi from "../../../apis/ChatApi";
import { chatContext } from "../../../store/Chat";
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:4000";

export default function Footer() {
  const { addChats } = useContext(chatContext);
  const enteredTextRef = useRef();
  const socket = io(SOCKET_SERVER_URL);

  const submitFormHandler = async (e) => {
    e.preventDefault();
    let message = enteredTextRef.current.value;
    const data = await postMessageApi(message);
    // console.log(data);
    // addChats(data);
    socket.emit("chat-message", data);
    enteredTextRef.current.value = "";
  };

  useEffect(() => {
    socket.on("chat-message", (msg) => {
      addChats(msg);
    });

    return () => {
      socket.disconnect(); // clean up on unmount
    };
  }, []);

  return (
    <div className={styles.footer}>
      <input
        type="text"
        className={styles.input}
        ref={enteredTextRef}
        placeholder="Type a message here..."
      />
      <button
        className={styles.sendButton}
        type="submit"
        onClick={submitFormHandler}
      >
        Send
      </button>
    </div>
  );
}
