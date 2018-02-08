import React, { Component } from 'react';

import { MyMainNav, MyMainContent } from '../../components';

class My extends Component {

  state = {
    navStateClass : '',
  }

  componentDidMount() {
    // call API to get userID (or null)
  }

  handleNavToggle(isOpen) {
    if (isOpen) {
      this.setState({navStateClass : 'main-nav-opened'})  
    }
    else {
      this.setState({navStateClass : ''})  
    }
    
  }

  render() {
    return (
      <div className={"container-fluid my " + this.state.navStateClass}>
        <MyMainNav 
          onToggle={() => this.handleNavToggle()}
        />
        <MyMainContent 
        />
      </div>
    )
  }
}

export default My;