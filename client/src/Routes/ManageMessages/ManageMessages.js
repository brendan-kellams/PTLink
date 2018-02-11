import React, { Component } from 'react';

import { MyMainNav, MyMainContent, InviteUser, MessageRow} from '../../components';
import { Helper, API } from '../../Utils';


class ManageMessages extends Component {

  state = {
    navStateClass   : '',
    received        : [],
    sent            : [],
    viewMsg         : {}
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

            <h3>Outbox</h3>
            <div className="outbox">
            {
              this.state.sent.map((message, index) => {
                return (
                  <MessageRow
                    key = {index}
                    viewMsg = {(event, msgID) => this.handleViewMessage(event, msgID)} 
                    messageID = {message.id}
                    title = {message.title}
                    toUserID = {message.toUserID}
                    toUser = {message.toUser}
                    msgDT = {message.dateTime}
                    msgBody = {message.msgBody}
                    handleDelete = {(event, msgID) => this.handleDeleteMessage(event, msgID)}
                  />
                );
              })
            }
            </div>

            <h3>Message Area</h3>
            {
              typeof (this.state.viewMsg.id) !== 'undefined' ? 
              <div className="message-view">
                <div className="message-id">{this.state.viewMsg.id} </div>
                <div className="message-title">{this.state.viewMsg.title}</div>
                <div className="message-to-user">{this.state.viewMsg.toUser}</div>
                <div className="message-from-user">{this.state.viewMsg.fromUser}</div>
                <div className="message-body"><p>{this.state.viewMsg.msgBody}</p></div>
              </div> :
              <div>Click on a message to read</div>
            }

          </div>

        </MyMainContent>
      </div>
    )
  }
}

export default ManageMessages;