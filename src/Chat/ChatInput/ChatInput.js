import React, { Component } from 'react';
import './ChatInput.scss';
import { ROLE } from '../../constants';

class ChatInput extends Component {
  constructor() {
    super();
    this.state = {
      sendMessage: { role: ROLE.CUSTOMER, text: '' },
    };
  }

  handleChange = (event) => {
    this.setState({
      sendMessage: { text: event.target.value },
    });
  };

  handleSubmit = () => {
    if (this.state.sendMessage.text) {
      this.props.send(this.state.sendMessage);
    }
    this.setState({
      sendMessage: { text: '' },
    });
  };

  render() {
    return (
      <footer className="ChatInput" onChange={(event) => this.handleChange(event)}>
        <input type="text" id="sendBar" value={this.state.sendMessage.text} />
        <button type="button" onClick={this.handleSubmit}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
