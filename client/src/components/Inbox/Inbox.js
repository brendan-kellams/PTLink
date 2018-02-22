import React, { Component } from 'react';

import { MessageRow, MessageArea, ComposeMessage } from '../../components';
import { Helper, API } from '../../Utils';

import './Inbox.css';


class Inbox extends Component {

  state = {
    received        : [],
    viewMsg         : {}
  }

  componentDidMount() {
    // get messages received
    API.checkForUser((err, userResponse) => {
      if (err) {
        console.log(err);
      }
      else {
        if (userResponse.status === 200) {
          this.setState({
            userPresent: true,
            username: userResponse.data.username,
            userId: userResponse.data.id
          });
          API.getMessagesReceived(userResponse.data.id, (err, messageResponse) => {
            if (err) {
              console.log(err);
            }
            else {
              if (messageResponse.status === 200) {
                this.setState({
                  received: messageResponse.data
                });
              }
            }
          });
        }
        else if (userResponse.status === 204) {
          this.setState({
            userPresent: false
          });
        }
      }
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
        <h3 className="sub-title">Inbox</h3>
        <div className="inbox">
        {
          this.state.received.length > 0 ? 
          this.state.received.map((message, index) => {
            return (
              <MessageRow
                key = {index}
                isReceived = {true}
                viewMsg = {(event, msgID) => this.handleViewMessage(event, msgID)} 
                messageID = {message.id}
                title = {message.subject}
                fromUserID = {message.senderId}
                fromUser = {message.sender}
                isRead = {!message.unread}
                msgDT = {Helper.parseISOString(message.createdAt)}
                msgBody = {message.body}
                handleDelete = {(event, msgObj) => this.handleDeleteMessage(event, msgObj)}
              />
            );
          }) : 
          <p className="empty-inbox">Your inbox is empty</p>
        }
        </div>

        <hr/>

        <MessageArea 
          viewMsg ={this.state.viewMsg}
        />

        <hr/>
        
        <ComposeMessage 
          currentUserId={this.props.currentUserId}
        />

      </div>
    )
  }
}

export default Inbox;