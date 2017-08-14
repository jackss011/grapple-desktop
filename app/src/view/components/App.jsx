import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import {connect} from 'react-redux'
import $ from 'jquery'

import ProjectsPane from './projects/ProjectsPane'
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
                        ? <div>Spinning</div> 
                        : (
                            <ProjectsPane/>
                        )
                    }
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        initializing: state.initializing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInit: () => dispatch(ActionsGenerator.initialize()),
        onWindowClick: () => dispatch(ActionsGenerator.windowClicked())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
