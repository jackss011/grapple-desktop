import React from 'react'
import {connect} from 'react-redux'

import ProjectsSpinner from '../ProjectsSpinner'
import ProjectRow from './ProjectRow'


class ProjectList extends React.Component {
    render() {
        return (
            <div className="projects-list">
                {this.createList()}
                {this.props.initial_loading && <ProjectsSpinner/>}
            </div>
        )
    }

    createList() {
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

export default connect(mapStateToProps, null)(ProjectList)