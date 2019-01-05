import React, { Component } from "react";
import { deleteChat, editChat } from "../actions";
import store from "../store";
import "./Chats.css";

const handleDeleteChat = number => {
  const activeUserId = store.getState().activeUserId;
  store.dispatch(deleteChat(number, activeUserId));
};
const handleEditChat = (number, text, e) => {
  const activeUserId = store.getState().activeUserId;
  store.dispatch(editChat(number, activeUserId, text));
};
//at this point, Chat could be moved to its own file.
const Chat = ({ message }) => {
  const { number, text, is_user_msg } = message;
  return is_user_msg ? (
    <div
      className="Chat is-user-msg"
      onDoubleClick={handleEditChat.bind(null, number, text)}
    >
      <span
        className="Chat__close"
        onClick={handleDeleteChat.bind(null, number)}
      >
        X
      </span>
      {text}
    </div>
  ) : (
    <span className="Chat">{text}</span>
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
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;
