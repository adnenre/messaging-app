import React from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Chats from "../components/Chats";
import MessageInput from "./MessageInput";
import _ from "lodash";
import "./ChatWindow.css";

const ChatWindow = ({ contacts, messages }) => {
  const { userId } = useParams();
  const history = useHistory();

  const activeUser = contacts[userId];
  const activeMsgs = messages[userId] || {};

  const handleBack = () => history.push("/");

  if (!activeUser) return <div className="chat-window__placeholder">Contact not found</div>;

  return (
    <div className="chat-window">
      <div className="chat-window__header">
        <button onClick={handleBack} className="chat-window__back-btn">
          ←
        </button>
        <Header user={activeUser} />
      </div>
      <Chats messages={_.values(activeMsgs)} activeUserId={userId} />
      <MessageInput activeUserId={userId} activeChatId={userId} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  messages: state.messages,
});

export default connect(mapStateToProps)(ChatWindow);
