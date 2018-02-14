import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { LessonSection, Footer, MyMainNav, MyMainContent, BasicBtn } from '../../components';
import { API } from '../../Utils';

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navStateClass: '',
      lessondate: '',
      topics: '',
      link: '',
      homework: '',
      duedate: '',
      classroomID: 2,
      users: []
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
  }
  componentDidMount() {
    API.getMyUsers((users) => {
      this.setState({
        users: users
      });
    })
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
      <div className={'container-fluid my ' + this.state.navStateClass}>
        <MyMainNav
          onToggle={(isOpen) => this.handleNavToggle(isOpen)}
        />
        <MyMainContent
          title='Welcome!'
          contentClasses='class-details'>
          <h1>Mrs. Simpson's 7th Grade Math Class</h1>

          <form onSubmit={this.handleSubmit}>
            <LessonSection
              SectionTitle='Lesson Plan'
              label='link'
              handleChange={this.handleChange.bind(this, 'link')}
              value={this.state.link}
            />
            <LessonSection
              SectionTitle='Covered In Class'
              label='topics'
              handleChange={this.handleChange.bind(this, 'topics')}
              value={this.state.topics}
            />
            <LessonSection
              SectionTitle='Homework'
              label="homework"
              handleChange={this.handleChange.bind(this, 'homework')}
              value={this.state.homework}
            />
          </form>

        </MyMainContent>
        <Footer>
          <form onSubmit={this.handleSubmit}>
            <BasicBtn
              classes='btn-primary'
              btnTxt='Add New Day' type='submit'
            />
          </form>
        </Footer>
        />
      </div>
    )
  }
}

export default Class;