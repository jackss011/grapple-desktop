import React from 'react'
import {connect} from 'react-redux'

import ProjectsHeader from './ProjectsHeader'
import ProjectRow from './ProjectRow'
import ProjectsSpinner from './ProjectsSpinner'


class ProjectsPane extends React.Component {
    render() {
        return (
            <div className="projects-pane">
                <ProjectsHeader />
                <hr/>
                <div className="projects-list">
                    {this.projectList()}
                </div>
            
                {this.props.initial_loading && <ProjectsSpinner/>}
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
        projects: projects.list,
        initial_loading: projects.initial_loading
    }
}

export default connect(mapStateToProps, null)(ProjectsPane)
