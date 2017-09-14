import React from 'react'
import {connect} from 'react-redux'


import ProjectsBottom from './ProjectsBottom'
import ProjectList from './list/ProjectList'
import ProjectDetails from './details/ProjectDetails'
import Snackbar from '../generic/Snackbar'


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
                {this.renderSnackbar()}
                <ProjectsBottom/>
            </div>
        )
    }

    renderSnackbar() {
        const snackbar = this.props.snackbar
        const projects = this.props.projects
        if(!snackbar) return null

        switch(snackbar.type) {
            case 'add':
                return (
                    <Snackbar>
                        Project &nbsp;
                        <strong>{projects[snackbar.uid].name}</strong>
                        &nbsp; added!
                    </Snackbar>
                )

            default: return null
        }
    }
}


function mapStateToProps({projects}) {
    return {
        hasSelected: projects.selected != null,
        isSelecting: projects.is_selecting,
        snackbar: projects.snackbar,
        projects: projects.list,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPane)
