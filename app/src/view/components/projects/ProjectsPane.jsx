import React from 'react'
import {connect} from 'react-redux'


import ProjectsBottom from './ProjectsBottom'
import ProjectList from './list/ProjectList'
import ProjectDetails from './details/ProjectDetails'


class ProjectsPane extends React.Component {
    render() {
        return (
            <div className="projects-pane">
                <div className="inside">
                    {this.props.hasSelected && <ProjectDetails/>}
                    {(this.props.isSelecting || !this.props.hasSelected)
                        && <ProjectList/>
                    }
                </div>
                <ProjectsBottom/>
            </div>
        )
    }
}


function mapStateToProps({projects}) {
    return {
        hasSelected: projects.selected != null,
        isSelecting: projects.is_selecting
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPane)
