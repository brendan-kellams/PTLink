import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Header, SignUpInput, BasicBtn, Radio, PublicFooter } from '../../components';
import { API, Helper } from '../../Utils';

class Signup extends Component {
  constructor(props) {

    super(props);

    this.state = { 
      userID: '',
      username: '',
      email: '',
      school: '',
      password: '',
      role: false,
      disableEmail: false,
      errorMsg    : 'hidden',
      emailErr    : 'hidden',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(label, value) {
    this.setState({ [label]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      errorMsg    : 'hidden',
      emailErr    : 'hidden',
    });

    if (!Helper.propIsEmpty(this.state.username) &&
        !Helper.propIsEmpty(this.state.email) &&
        !Helper.propIsEmpty(this.state.password) &&
        !Helper.propIsEmpty(this.state.school)) {
      
      if (Helper.validateEmail(this.state.email)) {
        let user = {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          school: this.state.school,
          isTeacher: (this.state.role === 'Teacher')
        }
        API.signUpUser(user, (err, status) => {
          if (err) {
            console.log("There has been an error with status: " + status);
          }
          else {

            let userData = {
              email: this.state.email,
              password: this.state.password
            };

            API.signInUser(userData, (err, response) => {
              if (err) {
                console.log('signin error', err);
              }
              else {
                if (response.status === 200) {
                  this.props.history.push('/my');
                }
              }
            });
          }
        });
      }
      else {
        this.setState({emailErr : ''})
      }
    }
    else {
      this.setState({errorMsg : ''})
    }    
  }

  componentDidMount() {
    // call API to get userID (or null)
    let email = Helper.getGETVariable('e'),
        role  = Helper.getGETVariable('role');

    if (Helper.validateEmail(email)) {
      this.setState({
        email: email,
        disableEmail: true
      });  
    }
    if (typeof role !== 'undefined' && 
        role.trim() === 'Teacher' || 
        role.trim() === 'Parent') {
      this.setState({
        role: role
      });
    }
  }

  render() {
    return (
      <div className='container-fluid signup'>
        <Header
          isUser={this.state.userID}
          history={this.props.history}
        />
        <div className="container main-content">
          <h3 className="brand-font signup-instruction">
            Fill out the form below to join us!
          </h3>

          <div className="row app-info">
        
          <form onSubmit={this.handleSubmit}>
            <span className={this.state.errorMsg + ' error error-message'}>Please fill in all the fields</span>
            <span className={this.state.emailErr + ' error error-message'}>Please enter a valid email address</span>
            <SignUpInput 
              label='Username' 
              value={this.state.username} 
              handleChange={this.handleChange.bind(this,'username')} 
              placeholder='Username'
            />

            <SignUpInput 
              label='Email Address' 
              handleChange={this.handleChange.bind(this, 'email')} 
              value={this.state.email}
              placeholder='Email Address'
              isDisabled={this.state.disableEmail}
            />

            <SignUpInput 
              label='Password' 
              handleChange={this.handleChange.bind(this,'password')} 
              value={this.state.password} 
              placeholder='Password'
              type="password"
            />

            <SignUpInput 
              label='School' 
              handleChange={this.handleChange.bind(this,'school')} 
              value={this.state.school} 
              placeholder='School'
            />

            <div className="radio-row">
              <Radio 
                name='Parent'  
                label='Parent' 
                handleChange={this.handleChange.bind(this, 'role')}
                value={this.state.role==='Parent'}
              />

              <Radio 
                name='Teacher'  
                label='Teacher' 
                handleChange={this.handleChange.bind(this, 'role')}
                value={this.state.role==='Teacher'}
              />
            </div>

            <BasicBtn 
              classes='btn-primary signupBtn' 
              btnTxt='Sign Up' type='submit'/>
          </form>
        </div>
      </div>

      <PublicFooter>
          <div className="footer-wrapper">
            <div className="shareRow">
            <a href="//facebook.com/PT-Link-148731259172020/" target="_blank"><i className="fa fa-facebook-square"></i></a> 
            <a href="//twitter.com/afGroff" target="_blank"><i className="fa fa-twitter-square"></i></a>
            <a href="//github.com/amcnulty/PTLink" target="_blank"><i className="fa fa-github-square"></i></a></div>
            <div className="copyright brand-font"><i className="fa fa-copyright"></i> 2018 The Gorilla Gang</div>
          </div>
        </PublicFooter>
    </div>
    )
  }
}

export default Signup;