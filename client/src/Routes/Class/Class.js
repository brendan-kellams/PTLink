import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { CoveredInClass, Homework, MyMainNav, MyMainContent, TextArea, BasicBtn } from '../../components';
import {API} from '../../Utils';

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navStateClass: '',
            users: []
        }
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

                <CoveredInClass 
                    info = 'This is what was covered in class.' />

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