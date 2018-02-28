import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { LessonForm, LessonModal, Footer, SectionForm } from '../../components';
import { MyMainNav, MyMainContent, BasicBtn } from '../../components';

import { API } from '../../Utils';

import './Class.css';

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      navStateClass: '',
      lessondate: '',
      topics: '',
      link: '',
      homework: '',
      duedate: '',
      classroomId: 2,
      users: [],
      classTitle: '',
      assignments: [],
      classNotes: [
        {
          id: 0,
          date: '02/28/2018',
        },
        {
          id: 1,
          date: '01/22/2018',
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(label, value) {
    this.setState({ [label]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('Adding Day', this.state);

    // posting assignment
    let requestObj = {
      lessondate: this.state.lessondate,
      topics: this.state.topics,
      link: this.state.link,
      homework: this.state.homework,
      duedate: this.state.duedate,
      classroomId: this.state.classInfo.id
    }

    API.addAssignment(requestObj, (err,response) => {
      if(err) {
        console.log('Error Adding Day', err);
      }
      else {
        if(response.status === 200) {
          // get assignments and close modal
          this.getAssignments();
          this.handleClose();
        }
      }
      // clear the modal form
      this.setState({
        lessondate : '',
        topics : '',
        link: '',
        homework: '',
        duedate: ''
      });
    });
  }
  componentDidMount() {
    // Check if user is present
    API.checkForUser((err, response) => {
      if (err) {
        this.setState({
          userPresent: false
        });
        console.log(err);
      }
      else {
        if (response.status === 200) {
          this.setState({
            userPresent :true,
            userId: response.data.id,
            username : response.data.username,
            isTeacher: response.data.isTeacher
          });
          // Set classInfo to the current class
          let classInfo = this.props.history.location.state;
          this.setState({
            classInfo: classInfo,
            classTitle: classInfo.instructor.username + '\'s ' + classInfo.subject + ' Class (period ' + classInfo.period + ')'
          });
          // Get assignments
          this.getAssignments();
          // console.log(this.state.classInfo);
        }
        else if (response.status === 204) {
          this.setState({
            userPresent: false
          });
          this.props.history.push('/');
        }
      }
    });
    
    API.getMyUsers((users) => {
      this.setState({
        users: users
      });
    })
  }
  getAssignments = () => {
    API.getAssignments(this.state.classInfo.id, (err, response) => {
      if (err) {
        console.log(err);
      }
      else {
        if (response.status === 200) {
          // console.log(response.data);
          this.setState({
            assignments: response.data.reverse()
          })
        }
      }
    });
  }
  handleClose = () => {
    this.setState({ showModal: false });
  }
  handleShow = () => {
    this.setState({ showModal: true });
  }

  handleNavToggle(isOpen) {
    if (isOpen) {
      this.setState({ navStateClass: 'main-nav-opened' });
    }
    else {
      this.setState({ navStateClass: '' });
    }
  }

  getContentClasses() {
    if (this.state.isTeacher) {
      return ' isTeacher';
    }
    else {
      return '';
    }
  }

  render() {
    return (
      this.state.userPresent ? 
      <div className={'container-fluid my my-class ' + this.state.navStateClass + this.getContentClasses()}>

        <LessonModal
          classes="lesson-modal"
          show={this.state.showModal}
          handleClose={this.handleClose}>
          <LessonForm
            handleChange={this.handleChange.bind(this)}
            handleSubmit={this.handleSubmit}
            value={this.state}
          />
        </LessonModal>

        <MyMainNav
          onToggle={(isOpen) => this.handleNavToggle(isOpen)}
          history={this.props.history}
          isTeacher={this.state.isTeacher}
        />
        <MyMainContent
          title={this.state.classTitle}
          contentClasses={this.getContentClasses() + ' class-details'}>
          {
            this.state.assignments.map((assignment, index) => {
              return (
                <SectionForm
                  key={index}
                  date={assignment.lessondate}
                  classes={"section-form-" + assignment.id}
                  handleSubmit={(event) => this.handleSubmit(event)}
                  content={assignment}
                />
              );
            })
          }
        </MyMainContent>

        <Footer>
          <BasicBtn
            classes='btn-primary addDayBtn'
            btnTxt='Add New Day'
            handleClick={this.handleShow}
          />
        </Footer>
      </div>  :
      <div className="page-loading">
        <i className="fa fa-spinner fa-spin"></i>
      </div>
    )
  }
}

export default Class;