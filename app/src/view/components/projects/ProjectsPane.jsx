import React from 'react'

import ProjectsHeader from './list/ProjectsHeader'
import ProjectList from './list/ProjectList'


class ProjectsPane extends React.Component {
    render() {
        return (
            <div className="projects-pane">
                <ProjectsHeader />
                <hr/>
                <ProjectList />
            </div>
        )
    }
}

export default ProjectsPane
