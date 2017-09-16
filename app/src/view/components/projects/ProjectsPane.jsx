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

    renderSnackbar() { //TODO check id successful + pass add project to snackbar state isntead od if
        const snackbar = this.props.snackbar
        if(!snackbar) return null

        let action = null

        switch(snackbar.type) {
            case 'add':
                action = 'added'
                break

            case 'delete':
                action = 'deleted'
                break

            default: return null
        }

        return (
            <Snackbar type={snackbar.type}>
                Project &nbsp;
                <strong>{snackbar.project.name}</strong>
                &nbsp; {action}!
            </Snackbar>
        )
    }
}


function mapStateToProps({projects}) {
    return {
        hasSelected: projects.selected != null,
        isSelecting: projects.is_selecting,
        snackbar: projects.snackbar,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPane)
