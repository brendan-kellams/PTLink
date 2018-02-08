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
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }

}

export default MyMainContent;