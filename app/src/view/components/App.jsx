import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import ProjectsPane from './projects/ProjectsPane'
import {connect} from 'react-redux'

import ActionsGenerator from '../../redux/actions/actions-generator'

import $ from 'jquery'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

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
                {this.props.initializing && <div>Spinning</div>}
                <ProjectsPane/>
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
