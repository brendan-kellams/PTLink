import React, { Component } from 'react';

import { MessageRow, MessageArea, LessonSection } from '../../components';
import { Helper, API } from '../../Utils';

import './SectionForm.css';

class SectionForm extends Component {

  state = {}

  componentDidMount() {
    API.checkForUser((err, response) => {
      if (err) {
        console.log(err);
      }
      else {
        if (response.status === 200) {
          this.setState({
            userPresent: true,
            username: response.data.username,
            userId: response.data.id
          });
        }
        else if (response.status === 204) {
          this.setState({
            userPresent: false
          });
        }
      }
    });
  }

  formatDate(date) {
    let printDate = new Date(date);
    if (isNaN(printDate.getTime())) {
      return 'N/A';
    }
    else {
      return printDate.toLocaleDateString("en-US");  
    }
  }

  render() {
    return (
      <div className="section-form-wrapper">
        <h2 className="section-date"><i className="fa fa-calendar"></i> {this.formatDate(this.props.date)} </h2>
        <div className={this.props.classes + ' section-form'}>
          <form
            onSubmit={(event) => this.props.handleSubmit(event)}>
            <LessonSection
              SectionTitle='Lesson Plan'
              bsClass='info'
              label='link'
              link={this.props.content.link}
            />
            <LessonSection
              SectionTitle='Topics Covered'
              bsClass='success'
              label='topics'
              text={this.props.content.topics}
            />
            <LessonSection
              SectionTitle='Homework'
              bsClass='warning'
              label="homework"
              text={this.props.content.homework}
            />
            <LessonSection
              SectionTitle='Due Date'
              bsClass='danger'
              label="duedate"
              text={this.props.content.duedate}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SectionForm;