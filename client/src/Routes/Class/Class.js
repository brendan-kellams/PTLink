import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {LessonPlan, CoveredInClass, Homework, MyMainNav, MyMainContent, TextArea, BasicBtn } from '../../components';
import {API} from '../../Utils';

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navStateClass: '',
            plan: '',
            topics: [],
            users: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(label,value) {
        this.setState({ [label]:value });
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

                {/* this is some logic for dupicating the input field after pressing enter.  I just don't know how to use it into the code */}
                {this.state.topics.map((topic) => (<input value={topic}/>))}
                    <input value={''}/>

                <form onSubmit={this.handleSubmit}>
                    <LessonPlan
                        label='plan'
                        handleChange={this.handleChange.bind(this, 'plan')}
                        value={this.state.plan} />

                    <CoveredInClass 
                        label= 'topic'
                        handleChange={this.handleChange.bind(this, 'topic')}
                        value={this.state.topic} />
                </form>

                <Homework
                    info = "This is the homework for the class" />

                    <form onSubmit={this.handleSubmit}>
                        <TextArea
                            label='Text Box' />

                        <BasicBtn
                            classes='btn-primary'
                            btnTxt='Send Message' type='submit' />
                    </form>
                </MyMainContent>
            </div>
        )
    }
}

export default Class;