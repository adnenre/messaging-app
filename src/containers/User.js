import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./User.css";

const User = ({ user, messages }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/chat/${user.user_id}`);
  };

  const userMessages = messages[user.user_id];
  const lastMessageObj = userMessages ? Object.values(userMessages).pop() : null;
  const lastMessage = lastMessageObj ? lastMessageObj.text : "No messages yet";

  let lastMessageTime = "";
  if (lastMessageObj && lastMessageObj.timestamp) {
    const date = new Date(lastMessageObj.timestamp);
    if (!isNaN(date.getTime())) {
      lastMessageTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
  }

  return (
    <div className="user" onClick={handleClick}>
      <div className="user__avatar">
        <img src={user.profile_pic} alt={user.name} className="user__avatar-img" />
      </div>
      <div className="user__info">
        <div className="user__name">{user.name}</div>
        <div className="user__last-message">{lastMessage}</div>
      </div>
      {lastMessageTime && <div className="user__time">{lastMessageTime}</div>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(User);
