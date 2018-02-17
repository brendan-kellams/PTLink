import React, { Component } from 'react';

import { MessageRow, MessageArea, LessonSection } from '../../components';
import { Helper, API } from '../../Utils';

import './SectionForm.css';

class SectionForm extends Component {

  state = {
  }

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

          // API.getMessagesSent(response.data.id, (err, response) => {
          //   if (err) {
          //     console.log(err);
          //   }
          //   else {
          //     if (response.status === 200) {
          //       this.setState({
          //         sent : response.data
          //       });
          //     }
          //   }
          // });

        }
        else if (response.status === 204) {
          this.setState({
            userPresent: false
          });
        }
      }
    });
  }

  render() {
    return (
      <div className="section-form-wrapper">
        <h2 className="section-date"><i className="fa fa-calendar"></i> {this.props.date} </h2>
        <div className={this.props.classes + ' section-form'}>
          <form
            onSubmit={(event) => this.props.handleSubmit(event)}>
            <LessonSection
              SectionTitle='Lesson Plan'
              bsClass='info'
              label='link'
            />
            <LessonSection
              SectionTitle='Covered In Class'
              bsClass='success'
              label='topics'
            />
            <LessonSection
              SectionTitle='Homework'
              bsClass='warning'
              label="homework"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SectionForm;