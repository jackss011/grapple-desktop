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
        if(this.props.projects == null) return;

        return Object.entries(this.props.projects).map(
            ([uid, project]) => <ProjectRow key={uid} project={project}/>
        )
    }
}

function mapStateToProps({projects}) {
    return {
        projects: projects.list
    }
}

export default connect(mapStateToProps, null)(ProjectsPane)
