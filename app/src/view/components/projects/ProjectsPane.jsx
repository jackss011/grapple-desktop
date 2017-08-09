import React from 'react'
import {connect} from 'react-redux'

import ProjectsHeader from './ProjectsHeader'
import ProjectRow from './ProjectRow'


class ProjectsPane extends React.Component {
    render() {
        return (
            <div className="projects-pane">
                <ProjectsHeader />
                <hr/>
                {this.projectList()}
            </div>
        )
    }

    projectList() {
        return Object.entries(this.props.projects).map(
            ([uid, project]) => <ProjectRow project={project}/>
        )
    }
}

function mapStateToProps({projects}) {
    return {
        projects
    }
}

export default connect(mapStateToProps, null)(ProjectsPane)
