import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Header } from '../../components';

class Signup extends Component {
  
  state = {
    userID : -1
  }

  componentDidMount() {
    // call API to get userID (or null)
  }
  
  render() {
    return (
      <div className="container-fluid home">
        <Header 
          isUser={this.state.userID}
        />
        <h1>This is the signup page yo!</h1>
      </div>
    )
  }
}

export default Signup;