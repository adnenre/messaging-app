import React, { useState } from "react";
import { connect } from "react-redux";
import { setTypingValue, sendMessage } from "../actions";
import "./MessageInput.css";

// Paper plane SVG component
const SendIcon = () => (
  <svg data-prefix="fas" data-icon="paper-plane" role="img" viewBox="0 0 776 712" aria-hidden="true" className="message-input__send-icon">
    <path
      fill="currentColor"
      d="M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"
    />
  </svg>
);

const MessageInput = ({ activeUserId, activeChatId, typing, setTypingValue, sendMessage }) => {
  const [text, setText] = useState(typing);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setText(newValue);
    setTypingValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    sendMessage(text, activeUserId, activeChatId);
    setTypingValue("");
    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input__field"
        placeholder="Type a message..."
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {text.trim().length > 0 && (
        <button type="submit" className="message-input__send" aria-label="Send">
          <SendIcon />
        </button>
      )}
    </form>
  );
};

const mapStateToProps = (state) => ({
  typing: state.typing,
});

const mapDispatchToProps = {
  setTypingValue,
  sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
