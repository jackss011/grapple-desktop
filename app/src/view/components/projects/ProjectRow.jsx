import React from 'react'

class ProjectRow extends React.Component {
    render() {
        return (
            <div className="project-row">
                <div className="name">{this.props.project.name}</div>
                <div className="description">{this.props.project.description}</div>
            </div>
        )
    }
}

export default ProjectRow
