import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Header, SignUpInput, CheckBox, BasicBtn } from '../../components';
// import { SignUpInput } from '../../components';
// import { CheckBox } from '../../components';


class Signup extends Component {

  state = {
    userID: -1
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
        <SignUpInput label="Username" />
        <SignUpInput label="Email Address"/>
        <SignUpInput label="Password"/>
        <CheckBox value="Parent" label= "Parent"/>
        <CheckBox value="Teacher" label="Teacher"/>
        <BasicBtn classes="btn-primary" btnTxt="Sign Up"/>
      </div>
    )
  }
}

export default Signup;