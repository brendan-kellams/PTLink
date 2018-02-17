import React, { Component } from 'react';

import { BasicBtn, Header, Footer } from '../../components';

class Home extends Component {

  state = {
    userID : -1
  }

  componentDidMount() {
    // call API to get userID (or null)
  }

  handleSignup (event, role) {
    event.preventDefault();
    this.props.history.push('/signup?role=' + role);
  }

  render() {
    return (
      <div className="container-fluid home">
      
        <Header 
          isUser={this.state.userID}
          history={this.props.history}
        />

        <div className="container main-content">
          <div className="row app-info">
            <h2 className="brand-font">Get involved with your kids' educational success</h2>
            <p>Create and establish solid communication between parent and teacher about your child's progress.</p>
            <p>Check daily postings regarding subjects covered in class, teacher's thought process, and homework assigned.</p>
            <p>Don't get blind-sided by not knowing what your child is being taught!</p>
            <p>Click one of the buttons below to join us!</p>
          </div>
          
          <div className="row signup-btn-row">
            <div className="col-sm-6 signup-block teacher-signup">
              <div className="zoom-wrapper">
                <div className="signup-img zoom"></div>
              </div>
              <BasicBtn 
                classes="btn-success signupBtn" 
                handleClick={event => this.handleSignup(event, 'Teacher')} 
                btnTxt="Sign Up"
              />  
            </div>
            
            <div className="col-sm-6 signup-block parents-signup">
              <div className="zoom-wrapper">
                <div className="signup-img zoom"></div>
              </div>
              <BasicBtn 
                classes="btn-info signupBtn" 
                handleClick={event => this.handleSignup(event, 'Parent')} 
                btnTxt="Sign Up"
              />  
            </div>
          </div>
        </div>
        

        <Footer>
          <div className="footer-wrapper">
            <div className="shareRow">
            <a href="//facebook.com/PT-Link-148731259172020/" target="_blank"><i className="fa fa-facebook-square"></i></a> 
            <a href="//twitter.com/afGroff" target="_blank"><i className="fa fa-twitter-square"></i></a>
            <a href="//github.com/amcnulty/PTLink" target="_blank"><i className="fa fa-github-square"></i></a></div>
            <div className="copyright"><i className="fa fa-copyright"></i> 2018 The Gorilla Gang</div>
          </div>
        </Footer>
      </div>
    )
  }
}

export default Home;