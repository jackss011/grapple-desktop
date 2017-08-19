import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import $ from 'jquery'

import Header from './header/Header'
import InitSpinner from './InitSpinner'
import ProjectsPane from './projects/ProjectsPane'
import MissingLabel from './generic/MissingLabel'
import Dialog from './generic/Dialog'

import ActionsGenerator from '~/redux/actions/actions-generator'


class App extends React.Component {
    componentWillMount() {
        this.props.onInit()
    }

    componentDidMount() {
        $(document).click(() => this.props.onWindowClick())
    }

    render() {  //TODO make a better spinner
        return (
            <div>
                <Header/>
                <div className="content">
                    {this.props.initializing 
                        ? <InitSpinner/>
                        : (
                            this.props.isLogged ? 
                            <ProjectsPane/> : 
                            <MissingLabel>Sign in to see something!</MissingLabel>
                        )
                    }
                </div>
                <Dialog/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        initializing: state.initializing,
        isLogged: state.user != null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInit: () => dispatch(ActionsGenerator.initialize()),
        onWindowClick: () => dispatch(ActionsGenerator.windowClicked())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
