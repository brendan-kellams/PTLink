import React, { Component } from 'react';
import './MyMainContent.css';

class MyMainContent extends Component {

  state = {
    
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={'main-content ' + this.props.contentClasses}>
        <p>This is the main content</p>
        { this.props.mainContent() }
      </div>
    );
  }

}

export default MyMainContent;