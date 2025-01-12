import React, { useState } from "react";

const obj = {
    chats:[],
    addChats:() =>{}
}

export const chatContext = React.createContext(obj);

const ChatContextProvider = (props) => {
    const [chats, setChats] = useState([]);
     
    const addChatsHandler = (val) => {
        if(Array.isArray(val)) {
            setChats(val);
        }else {
            setChats(prev => [...prev, val])
        }
    }

    const chatsObj = {
        chats,
        addChats:addChatsHandler
    }

    return (<chatContext.Provider value={chatsObj}>
        {props.children}
    </chatContext.Provider>)
}

export default ChatContextProvider;