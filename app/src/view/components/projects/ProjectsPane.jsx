import React from 'react'
import {connect} from 'react-redux'


import ProjectsBottom from './ProjectsBottom'
import ProjectList from './list/ProjectList'
import ProjectDetails from './details/ProjectDetails'


class ProjectsPane extends React.Component {
    render() {
        return (
            <div className="projects-pane">
                {this.props.hasSelected
                    ? <ProjectDetails/>
                    : <ProjectList/>}
                <ProjectsBottom/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        hasSelected: state.projects.selected != null
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPane)
