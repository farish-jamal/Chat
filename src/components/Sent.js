import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase";

function Sent() {
  const [msg, setMsg] = useState("");

  async function handleClick(e) {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;
    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    window.scroll(0, 0);
  }
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <form onSubmit={handleClick}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="Message..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <Button
            color="primary"
            variant="contained"
            disabled={!msg}
            style={{
              width: "18%",
              fontSize: "15px",
              fontWeight: "550",
              margin: "4px 5% -13px 5%",
              maxWidth: "200px",
            }}
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Sent;
