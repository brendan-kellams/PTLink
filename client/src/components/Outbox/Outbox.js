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
    API.checkForUser((err, response) => {
      if (err) {
        console.log(err);
      }
      else {
        if (response.status === 200) {
          this.setState({
            userPresent: true,
            username: response.data.username,
            userId: response.data.id
          });
          API.getMessagesSent(response.data.id, (err, response) => {
            if (err) {
              console.log(err);
            }
            else {
              if (response.status === 200) {
                this.setState({
                  sent : response.data
                });
              }
            }
          });
        }
        else if (response.status === 204) {
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
      <div className="message-outbox">
        <h3 className="sub-title">Outbox</h3>
        <div className="outbox">
        {
          this.state.sent.length > 0 ? 
          this.state.sent.map((message, index) => {
            return (
              <MessageRow
                key = {index}
                viewMsg = {(event, msgID) => this.handleViewMessage(event, msgID)} 
                messageID = {message.id}
                title = {message.subject}
                toUser = {message.recipients}
                msgDT = {Helper.parseISOString(message.createdAt)}
                msgBody = {message.body}
                handleDelete = {(event, msgID) => this.handleDeleteMessage(event, msgID)}
              />
            );
          }) :
          <p className="empty-outbox">Your outbox is empty</p>
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