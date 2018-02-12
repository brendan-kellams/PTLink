import React, { Component } from 'react';

import { MessageRow, MessageArea, ComposeMessage } from '../../components';
import { Helper, API } from '../../Utils';


class Inbox extends Component {

  state = {
    received        : [],
    viewMsg         : {}
  }

  componentDidMount() {
    // get messages received
    API.getMessagesReceived((messages) => {
      this.setState({
        received : messages
      });
    });
  }

  handleDeleteMessage(event, msgID) {
    event.preventDefault();
    console.log('deleting message', msgID);;
    // call API to delete User
    API.deleteMsg(msgID);
  }

  handleViewMessage (event, msgObj) {
    event.preventDefault();
    this.setState({
      viewMsg : msgObj
    });
    API.setMessageRead(msgObj.id);
  }

  render() {
    return (
      <div className="message-inbox">
        <h3>Inbox</h3>
        <div className="inbox">
        {
          this.state.received.map((message, index) => {
            return (
              <MessageRow
                key = {index}
                isReceived = {true}
                viewMsg = {(event, msgID) => this.handleViewMessage(event, msgID)} 
                messageID = {message.id}
                title = {message.title}
                fromUserID = {message.fromUserID}
                fromUser = {message.fromUser}
                isRead = {message.isRead}
                msgDT = {message.dateTime}
                msgBody = {message.msgBody}
                handleDelete = {(event, msgObj) => this.handleDeleteMessage(event, msgObj)}
              />
            );
          })
        }
        </div>

        <MessageArea 
          viewMsg ={this.state.viewMsg}
        />

        <ComposeMessage />

      </div>
    )
  }
}

export default Inbox;