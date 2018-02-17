import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
      classObj: {
        id: 0,
        name: "Mr. Kellams' Math 101",
      },
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
    alert('Class has been Updated');
    event.preventDefault();
    console.log(this.state);
    // posting assignment
    let requestObj = {
      lessondate: this.state.lessondate,
      topics: this.state.topics,
      link: this.state.link,
      homework: this.state.homework,
      duedate: this.state.duedate,
      classroomId: this.state.classroomId
    }
    API.addAssignment(requestObj, (err,response) => {
      if(err) {
        console.log(err);
      }
      else {
        if(response.status === 200) {
          alert('post added');
        }
      }
    });
  }
  componentDidMount() {
    API.getMyUsers((users) => {
      this.setState({
        users: users
      });
    })
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

  render() {
    return (
      <div className={'container-fluid my my-class ' + this.state.navStateClass}>
        <LessonModal
          show={this.state.showModal}
          handleClose={this.handleClose}>
          <LessonForm
            label="link"
            handleChange={this.handleChange.bind(this)}
            handleSubmit={this.handleSubmit}
            value={this.state}
          />
        </LessonModal>

        <MyMainNav
          onToggle={(isOpen) => this.handleNavToggle(isOpen)}
        />
        <MyMainContent
          title={this.state.classObj.name}
          contentClasses='class-details'>
          {
            this.state.classNotes.map((classNote, index) => {
              return (
                <SectionForm
                  key={index}
                  date={classNote.date}
                  classes={"section-form-" + classNote.id}
                  handleSubmit={(event) => this.handleSubmit(event)}
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
      </div>
    )
  }
}

export default Class;