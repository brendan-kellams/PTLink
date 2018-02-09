import React, { Component } from 'react';

import { MyMainNav, MyMainContent, InviteUser, MessageRow} from '../../components';
import { Helper, API } from '../../Utils';


class ManageMessages extends Component {

  state = {
    navStateClass   : '',
    received        : [],
    sent            : [],
  }

  componentDidMount() {
    // get messages received
    API.getMessagesReceived((messages) => {
      this.setState({
        received : messages
      });
    });

    // get messages sent
    API.getMessagesSent((messages) => {
      this.setState({
        sent : messages
      });
    });
  }

  handleNavToggle(isOpen) {
    if (isOpen) {
      this.setState({navStateClass : 'main-nav-opened'})  
    }
    else {
      this.setState({navStateClass : ''})  
    }
  }

  // handleDeleteUser(event, userID) {
  //   event.preventDefault();
  //   console.log('yooooo');
  //   // call API to delete User
  //   API.deleteUser(userID);
  // }

  handleDeleteMessage(event, msgID) {
    event.preventDefault();
    console.log('deleting message', msgID);;
    // call API to delete User
    API.deleteMsg(msgID);
  }

  render() {
    return (
      <div className={"container-fluid my " + this.state.navStateClass}>
        <MyMainNav 
          onToggle={(isOpen) => this.handleNavToggle(isOpen)}
        />
        <MyMainContent
          title="messages"
          contentClasses ='manage-messages'>
        
          <div className="messages-container">
            This is the manage message page<br/>
            <ul>
              <li>TODO: inbox - send message</li>
              <li>TODO: onclick, open message</li>
            </ul>

            <hr/>

            <h3>Inbox</h3>
            <div className="inbox">
            {
              this.state.received.map((message, index) => {
                return (
                  <MessageRow
                    key = {index}
                    isReceived = {true}
                    messageID = {message.id}
                    title = {message.title}
                    fromUserID = {message.fromUserID}
                    fromUser = {message.fromUser}
                    isRead = {message.isRead}
                    msgDT = {message.dateTime}
                    handleDelete = {(event, msgID) => this.handleDeleteMessage(event, msgID)}
                  />
                );
              })
            }
            </div>

            <h3>Outbox</h3>
            <div className="outbox">
            {
              this.state.sent.map((message, index) => {
                return (
                  <MessageRow
                    key = {index}
                    messageID = {message.id}
                    title = {message.title}
                    toUserID = {message.toUserID}
                    toUser = {message.toUser}
                    msgDT = {message.dateTime}
                    handleDelete = {(event, msgID) => this.handleDeleteMessage(event, msgID)}
                  />
                );
              })
            }
            </div>
          </div>

        </MyMainContent>
      </div>
    )
  }
}

export default ManageMessages;