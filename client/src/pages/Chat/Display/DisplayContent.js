import React, { useContext, useRef, useEffect } from "react";

import styles from "../Chat.module.css";
import { chatContext } from "../../../store/Chat";
import useFetch from "../../../hook/useFetch";
import { LocalHost } from "../../../App";

export default function DisplayContent() {
  const { chats, addChats } = useContext(chatContext);
  const chatContainerRef = useRef();
  const { data, loading, error } = useFetch(`${LocalHost}/chat/messages`,"GET");

  //   data && console.log(chats, data.messages);

  useEffect(() => {
    data && chats.length < data.messages.length && addChats(data.messages);
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [data, chats]);

  return (
    <div className={styles.chatDisplayContainer} ref={chatContainerRef}>
      {chats.map((ele) => (
        <div className={styles.chatMessages} key={Math.random()}>
          {ele.chats}
        </div>
      ))}
    </div>
  );
}
