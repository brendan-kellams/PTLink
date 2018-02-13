import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Footer, LessonPlan, CoveredInClass, Homework, MyMainNav, MyMainContent, TextArea, BasicBtn } from '../../components';
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
                    onToggle={(isOpen) => this.handleNavToggle(isOpen)} />
                <MyMainContent
                    title='Welcome!'
                    contentClasses='class-details'>
                    <h1>Mrs. Simpson's 7th Grade Math Class</h1>

                    {/* this is some logic for dupicating the input field after pressing enter.  
                I just don't know how to use it into the code-Brendan */}
                    {/* {this.state.topics.map((topic) => (<input value={topic} />))}
                    <input value={''} /> */}

                    <form onSubmit={this.handleSubmit}>
                        {/* I need to find a way to make this into a link when the teacher presses enter-Brendan */}
                        <LessonPlan
                            label='link'
                            handleChange={this.handleChange.bind(this, 'link')}
                            value={this.state.link} />
                        {/* {this.state.topics.map((topic) => (<input value={topic} />))}
                            <input value={''} /> */}


                        <CoveredInClass
                            label='topic'
                            handleChange={this.handleChange.bind(this, 'topic')}
                            value={this.state.topic} />
                    </form>

                    <Homework
                        label="homework"
                        handleChange={this.handleChange.bind(this, 'homework')}
                        value={this.state.homework} />

                    <form onSubmit={this.handleSubmit}>

                        <BasicBtn
                            classes='btn-primary'
                            btnTxt='Add New Day' type='submit' />
                    </form>
                </MyMainContent>
                <Footer

                    text="This is a footer" />
            </div>


        )
    }
}

export default Class;