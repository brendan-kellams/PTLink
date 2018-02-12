import React, { Component } from 'react';

import { MessageRow, MessageArea } from '../../components';
import { Helper, API } from '../../Utils';


class Outbox extends Component {

  state = {
    navStateClass   : '',
    sent            : [],
    viewMsg         : {}
  }

  componentDidMount() {
    // get messages sent
    API.getMessagesSent((messages) => {
      this.setState({
        sent : messages
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
      <div className="message-outbox">
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

        <hr/>
        
        <MessageArea 
          viewMsg ={this.state.viewMsg}
        />
      </div>
    )
  }
}

export default Outbox;