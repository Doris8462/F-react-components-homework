import React, { Component } from 'react';
import './ChatInput.scss';
import { ROLE } from '../../constants';

class ChatInput extends Component {
  handleSubmit = () => {
    const sendMessage = {};
    sendMessage.role = ROLE.CUSTOMER;
    sendMessage.text = document.getElementById('sendBar').value;
    if (sendMessage.text) {
      this.props.send(sendMessage);
    }
    document.getElementById('sendBar').value = '';
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" id="sendBar" />
        <button type="button" onClick={this.handleSubmit}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
