import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './MyMainContent.css';


// for use with public pages ONLY
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