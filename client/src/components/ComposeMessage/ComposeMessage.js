import React, { Component } from 'react';

import { MessageRow } from '../../components';
import { Helper, API } from '../../Utils';

import './ComposeMessage.css';

class ComposeMessage extends Component {

  state = {
    userName  : '',
    title     : '',
    body      : '',
    errorMsg  : 'hidden',
    successMsg : 'hidden',
  }

  componentDidMount() {}

  updateState(event, name) {
    const value = event.target.value;

    this.setState({
      [name] : value
    });
  };

  handleSendMessage(event) {
    event.preventDefault();

    this.setState({
      errorMsg    : 'hidden',
      successMsg  : 'hidden',
    });

    if (!Helper.propIsEmpty(this.state.userName) &&
        !Helper.propIsEmpty(this.state.title) &&
        !Helper.propIsEmpty(this.state.body)) {
      API.sendMessage({
        userName : this.state.userName,
        title : this.state.title,
        body : this.state.body,
      });
      this.setState({successMsg : ''});
    }
    else {
      this.setState({errorMsg : ''});
    }
  }

  render() {
    return (
      <div className="message-outbox">
      
        <h3>Compose Message</h3>

        <div className={this.state.errorMsg + ' error error-message'}>Please enter all required fields</div>
        <div className={this.state.successMsg + ' message-success'}>Message Sent</div>
        <div className="outbox">  
          <div className="compose-msg">
            <form className="send-msg-form" onSubmit={(event) => this.handleSendMessage(event)} >
              <input  type="text" 
                      className="message-to-user" placeholder="To: User Name" 
                      value={this.state.userName}
                      onChange={(event, name) => this.updateState(event, 'userName')}
              />
              <input  type="text" 
                      className="message-title" placeholder="Title" 
                      value={this.state.title}
                      onChange={(event, name) => this.updateState(event, 'title')}
              />
              <textarea className="message-body"
                        value={this.state.body}
                        onChange={(event, name) => this.updateState(event, 'body')}></textarea>
              <input type="submit" className="btn btn-primary" value="Send" />          
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ComposeMessage;