import React from 'react'
import {connect} from 'react-redux'

import ProjectsSpinner from '../ProjectsSpinner'

import ActionsGenerator from '~/redux/actions/actions-generator'
import {formatTimestamp} from '~/model/utils'


class ProjectDetails extends React.Component {
    render() {
        if(!this.props.project) return <div className="project-details"><ProjectsSpinner/></div>

        return (
            <div className="project-details">
                <div className="texts">
                    <div className="name">{this.props.project.name}</div>
                    <div className="timestamp">{`Created: ${formatTimestamp(this.props.project.timestamp)}`}</div>
                    <div className="description">{this.props.project.description}</div>
                </div>

                <div className="action-bar">
                    <button
                        className="delete-button"
                        onClick={() => this.props.onDelete(this.props.projectUid)}
                    >
                        <i className="material-icons small">clear</i>
                    </button>

                    <button
                        className="edit-button"
                        onClick={() => {}}
                    >
                        <i className="material-icons small">edit</i>
                    </button>

                </div>
            </div>
        )
    }
}


function mapStateToProps({projects}) {
    return {
        projectUid: projects.selected,
        project: projects.selected && projects.list && projects.list.hasOwnProperty(projects.selected) && projects.list[projects.selected]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: uid => dispatch(ActionsGenerator.deleteProject(uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)
