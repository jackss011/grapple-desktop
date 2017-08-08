import React from 'react'
import ProjectsHeader from './ProjectsHeader'

class ProjectsPane extends React.Component {
    render() {
        return (
            <div className="projects-pane">
                <ProjectsHeader />
                <hr/>
            </div>
        )
    }
}

export default ProjectsPane