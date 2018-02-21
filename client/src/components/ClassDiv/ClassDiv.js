import React, { Component } from 'react';
import { Row, Button } from 'react-bootstrap';

import { API } from '../../Utils';

import './ClassDiv.css';

class ClassDiv extends Component {

  state = {
    isDeleted : false
  }

  componentDidMount() {}

  handleEnterClass(e, classInfo) {
    // console.log(e.target);
    // console.log("Entering class:" + classInfo.id);
    this.props.history.push('/my/class', classInfo);
  }

  handleDeleteClass(e, classID) {
    e.preventDefault();

    API.deleteClass(classID, () => {
      let currentPath = window.location.pathname;

      this.setState({
        isDeleted : true,
      })
    });
  }

  render() {
    return (
      <div className={this.state.isDeleted ? 'isDeleted class-div col-sm-3' : 'class-div col-sm-3'}>
        <div className='thumbnail'>
          <div className="class-icon"><i class="fa fa-book"></i></div>
          <h3 className="class-title">{this.props.ClassTitle}</h3>
          <div className="class-info">
            <span className="class-subject label label-success">{this.props.classSubject}</span>
            <span className="class-period label label-warning">{this.props.description}</span>
          </div>
          <Button
            onClick={(e) => this.handleEnterClass(e, this.props.classInfo)}
            bsStyle="info"
            className="manageClassBtn"
          >
            Enter Class
          </Button>
          {
            this.props.isTeacher ?
            <Button
              onClick={(e) => this.handleDeleteClass(e, this.props.classInfo.id)}
              bsStyle="danger"
              className="deleteClassBtn"
            >
              Delete
            </Button> : ''
          }
        </div>
      </div>
    )
  }

}

export default ClassDiv;