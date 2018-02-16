import React, { Component } from 'react';

import { BasicBtn, Header, Footer } from '../../components';

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

        <div className="container main-content">
          <div className="row app-info">
            <h2 className="brand-font">Take charge in your kids' success</h2>
            <p>Spy on your kids to make sure they are not just bullshiting you about how their teachers not giving them no homework.</p>
            <p>Call them out if you catch them bullshitting so they might have a chance to become a decent human being!</p>
            <p>Stop your kids from TPing their teachers' houses! Transfer those bail bonds to college fund!!</p>
            <p>Click one of the buttons below to join us!</p>
          </div>
          
          <div className="row signup-btn-row">
            <div className="col-sm-6 signup-block teacher-signup">
              <div className="zoom-wrapper">
                <div className="signup-img zoom"></div>
              </div>
              <BasicBtn 
                classes="btn-success signupBtn" 
                handleClick={event => this.handleSignup(event)} 
                btnTxt="Sign Up"
              />  
            </div>
            
            <div className="col-sm-6 signup-block parents-signup">
              <div className="zoom-wrapper">
                <div className="signup-img zoom"></div>
              </div>
              <BasicBtn 
                classes="btn-info signupBtn" 
                handleClick={event => this.handleSignup(event)} 
                btnTxt="Sign Up"
              />  
            </div>
          </div>
        </div>
        

        <Footer>
          <div className="footer-wrapper">
            <div className="shareRow">
            <a href="//facebook.com/PT-Link-148731259172020/" target="_blank"><i className="fa fa-facebook-square"></i></a> 
            <a href="//twitter.com/afGroff" target="_blank"><i className="fa fa-twitter-square"></i></a></div>
            <div className="copyright"><i className="fa fa-copyright"></i> 2018 The Gorilla Gang</div>
          </div>
        </Footer>
      </div>
    )
  }
}

export default Home;