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
        if(!snackbar) return null

        let name =<strong>&nbsp;{snackbar.project.name}&nbsp;</strong>
        let className = snackbar.type + ' ' + (snackbar.success ? '' : 'failed')

        switch(snackbar.type) {
            case 'add':
                return (
                    <Snackbar className={className}>
                        {snackbar.success
                            ? ['Project', name, 'added!']
                            : ['Failed to add project', name]
                        }
                    </Snackbar>
                )
                break

            case 'delete':
                return (
                    <Snackbar className={className}>
                        {snackbar.success
                            ? ['Project', name, 'deleted!']
                            : ['Failed to delete project', name]
                        }
                    </Snackbar>
                )
            break

            default: return null
        }
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
