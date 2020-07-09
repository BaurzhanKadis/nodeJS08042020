import React, { Component } from 'react';

import './Message.css';

class Message extends Component {
  render() {
    return (
      <div className="Message-container">
        <img className="BottumMenu-img-message" src="img/img-message.jpg" alt="message"/>
      </div>
    );
  }
}

export default Message;