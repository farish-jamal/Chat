import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import Sent from "./Sent";
import SignOut from "./SignOut";

function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  console.log(messages);
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, displayName, uid }) => (
          <div
            key={id}
            className={`msg ${
              uid === auth.currentUser.uid ? "sent" : "received"
            }`}
          >
            <img src={photoURL} alt="photoha" />
            <h6
              className={`name ${
                uid === auth.currentUser.uid ? "sentName" : "receiveName"
              }`}
            >
              {displayName}
            </h6>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <Sent />
    </div>
  );
}

export default Chat;
