import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { MyMainNav, MyMainContent, TextArea, BasicBtn } from '../../components';
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
                    title='FUCK YOU!'
                    contentClasses='class-details'>
                <h1>Here is the class page</h1>
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