import React from 'react'
import {connect} from 'react-redux'

import ActionsGenerator from '~/redux/actions/actions-generator'


class ProjectDetails extends React.Component {
    render() {

        if(!this.props.project) return <div className="project-details"/> //TODO ADD SPINNER HERE

        return (
            <div className="project-details">
                <div className="texts">
                    <div className="name">{this.props.project.name}</div>
                    <div className="description">{this.props.project.description}</div>
                </div>

                <div className="action-bar">
                    <button
                        className="delete-button"
                        onClick={() => this.props.onDelete(this.props.projectUid)}
                    >
                        <i className="material-icons small">clear</i>
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
