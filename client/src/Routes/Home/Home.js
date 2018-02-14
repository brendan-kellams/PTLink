import React, { Component } from 'react';

import { BasicBtn, Header } from '../../components';

class Home extends Component {

  state = {
    userID : -1
  }

  componentDidMount() {
    // call API to get userID (or null)
  }

  handleSignup (event) {
    event.preventDefault();
    this.props.history.push('/signup');
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
            classes="btn-success signupBtn" 
            handleClick={event => this.handleSignup(event)} 
            btnTxt="Sign Up"
          />
        </section>
      </div>
    )
  }
}

export default Home;