import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignupBtn } from '../../components';

class Home extends Component {
  constructor (props) {
    super(props);
  }

  handleTeacherSignup (event) {
    event.preventDefault();
    this.props.history.push('/signup')
  }

  render() {
    return (
      <div className="container home">
        <h1>HOME PAGE</h1>
        <SignupBtn 
          classes="btn-success teacherSignup" 
          handleClick={(event) => this.handleTeacherSignup(event)} 
          btnTxt="Signup as Teacher"
        />
        <SignupBtn 
          classes="btn-success parentSignup" 
          handleClick={(event) => this.handleTeacherSignup(event)} 
          btnTxt="Signup as Parent"
        />
      </div>
    )
  }
}

export default Home;