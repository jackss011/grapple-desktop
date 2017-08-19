import React from 'react'

import AddProjectButton from '../AddProjectButton'
import AddProjectForm from '../AddProjectForm'

import ActionGenerator from '~/redux/actions/actions-generator'


class ProjectListHeader extends React.Component {
    render() {
        return (
            <div className="projects-header">
                <h1>Select a project</h1>
            </div>
        )   
    }
}

export default ProjectListHeader