import React from 'react'

class ProjectsSpinner extends React.Component {
    render() {
        return (
            <div className="project-spinner">
                <div className="animated-spinner" />
                <div className="loading-projects"> 
                    Loading projects...
                </div>
            </div>
        )
    }
}

export default ProjectsSpinner
