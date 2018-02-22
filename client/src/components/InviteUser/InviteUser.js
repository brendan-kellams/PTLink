import React, { Component } from 'react';

import { Helper, API } from '../../Utils';


// for use with public pages ONLY
class InviteUser extends Component {
  state = {
    email       : '',
    successMsg  : 'hidden',
    errorMsg    : 'hidden'
  };

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(event, this.state.email);

    this.setState({
      email : ''
    });
  }

  handleUserInput(event) {
    event.preventDefault();

    const value = event.target.value;

    this.setState({email : value});
  }
  
  render() {
    return (
      <div className="invite-user-container">
        <h3 className="sub-title">Invite User</h3>
        <span className={this.props.successMsg + ' success-message'}>Added user to class</span>
        <span className={this.props.errorMsg + ' error error-message'}>Please enter a valid email address</span>
        <form 
          className="invite-user-form"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <input 
            type="text" 
            className="invite-user-email"
            value={this.state.email} 
            onChange={(event) => this.handleUserInput(event)}
            placeholder="Email" />
          <input 
            className="btn btn-primary inviteBtn"
            type="submit" 
            value="Invite" 
          />
        </form>
      </div>
    );
  }
  
}

export default InviteUser;