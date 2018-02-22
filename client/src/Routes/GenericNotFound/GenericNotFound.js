import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BasicBtn, Header, PublicFooter } from '../../components';

import { Helper } from '../../Utils';

class GenericNotFound extends Component {

  state = {
    userID : -1
  }

  componentDidMount() {
    // call API to get userID (or null)
    Helper.printGorilla();
  }

  handleSignup (event, role) {
    event.preventDefault();
    this.props.history.push('/signup?role=' + role);
  }

  render() {
    return (
      <div className="container-fluid not-found-404">

        <div className="container main-content">
          <div className="error-image"></div>
          <div className="error-text">
            <h1>404. Page Not Found.</h1>
            <h2>This is not the end of the world!</h2>
            <p>It appears that you stumbled upon a broken link</p>
            <p>It happens to the best of us.</p>
            <p>You might wanna return to the home page <Link to="/">HERE</Link></p>
          </div>
        </div>
        
      </div>
    )
  }
}

export default GenericNotFound;