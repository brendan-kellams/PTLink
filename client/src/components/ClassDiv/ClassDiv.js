import React, { Component } from 'react';
import { Row, Button } from 'react-bootstrap';

import './ClassDiv.css';

class ClassDiv extends Component {

  componentDidMount() {

  }

  handleEnterClass(e, classInfo) {
    console.log(e.target);
    console.log("Entering class:" + classInfo.id);
    this.props.history.push('/my/class', classInfo);
  }

  render() {
    return (
      <div className='class-div col-sm-6 col-md-4 col-lg-3'>
        <div className='thumbnail'>
          <div className='caption'>
            <h3 className="class-title">{this.props.ClassTitle}</h3>
            <p>{this.props.description}</p>
            <Button
              onClick={(e) => this.handleEnterClass(e, this.props.classInfo)}
              bsStyle="primary"
            >
              Enter Class
            </Button>
          </div>
        </div>
      </div>
    )
  }

}

export default ClassDiv;