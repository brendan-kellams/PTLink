import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { BasicBtn, Header } from '../../components';

class Home extends Component {

  state = {
    userID : -1
  }

  componentDidMount() {
    // call API to get userID (or null)
  }

  handleSignup (event, type) {
    event.preventDefault();

    // teacher signup
    if (type === 0) {
      console.log('do teacher signup');
      this.props.history.push('/signup')
    }
    // parent signup
    else {
      console.log('do parent signup');
      this.props.history.push('/signup')
    }
  }

  handleTeacherSignup(event) {
    this.handleSignup(event, 0);
  }
  handleParentSignup(event) {
    this.handleSignup(event, 1);
  }

  render() {
    return (
      <div className="container-fluid home">
        <Header 
          isUser={this.state.userID}
        />
        <h1>HOME PAGE</h1>

        <section className="info">
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </p>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </section>

        <section className="signup">
          <BasicBtn 
            classes="btn-success signupBtn teacherSignup" 
            handleClick={(event) => this.handleTeacherSignup(event)} 
            btnTxt="Signup as Teacher"
          />

          <BasicBtn 
            classes="btn-success signupBtn parentSignup" 
            handleClick={(event) => this.handleParentSignup(event)} 
            btnTxt="Signup as Parent"
          />
        </section>
      </div>
    )
  }
}

export default Home;