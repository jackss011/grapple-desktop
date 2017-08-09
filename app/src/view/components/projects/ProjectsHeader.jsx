import React from 'react'
import AddProjectButton from './AddProjectButton'

class ProjectHeader extends React.Component {
    render() {
        return (
            <div className="projects-header">
                <AddProjectButton />
            </div>
        )   
    }
}

export default ProjectHeader