import React, { Component } from "react";
import { deleteChat, editChat } from "../actions";
import store from "../store";
import "./Chats.css";

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const formatDateSeparator = (timestamp) => {
  const date = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (date.toDateString() === today.toDateString()) return "TODAY";
  if (date.toDateString() === yesterday.toDateString()) return "YESTERDAY";
  return date.toLocaleDateString();
};

const Chat = ({ message, activeUserId }) => {
  const { number, text, is_user_msg, timestamp } = message;
  const timeStr = timestamp ? formatTime(timestamp) : "";

  const handleDelete = () => {
    store.dispatch(deleteChat(number, activeUserId));
  };

  const handleEdit = () => {
    store.dispatch(editChat(number, activeUserId, text));
  };

  if (is_user_msg) {
    return (
      <div className="chats__chat chats__chat--user" onDoubleClick={handleEdit}>
        <span className="chats__close" onClick={handleDelete}>
          ✕
        </span>
        <div className="chats__text">{text}</div>
        <div className="chats__timestamp">{timeStr}</div>
      </div>
    );
  }
  return (
    <div className="chats__chat chats__chat--other">
      <div className="chats__text">{text}</div>
      <div className="chats__timestamp">{timeStr}</div>
    </div>
  );
};

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    if (this.chatsRef.current) {
      this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    }
  };
  render() {
    const { messages, activeUserId } = this.props;
    if (!messages || messages.length === 0) return null;

    const groupedMessages = {};
    messages.forEach((msg) => {
      const dateKey = new Date(msg.timestamp).toDateString();
      if (!groupedMessages[dateKey]) groupedMessages[dateKey] = [];
      groupedMessages[dateKey].push(msg);
    });

    const messageElements = [];
    Object.keys(groupedMessages).forEach((dateKey, idx) => {
      const separator = formatDateSeparator(groupedMessages[dateKey][0].timestamp);
      messageElements.push(
        <div key={`sep-${idx}`} className="chats__date-separator">
          {separator}
        </div>,
      );
      groupedMessages[dateKey].forEach((msg) => {
        messageElements.push(<Chat message={msg} key={msg.number} activeUserId={activeUserId} />);
      });
    });

    return (
      <div className="chats" ref={this.chatsRef}>
        {messageElements}
      </div>
    );
  }
}

export default Chats;
