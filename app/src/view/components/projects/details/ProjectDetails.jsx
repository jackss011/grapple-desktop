import React from 'react'
import {connect} from 'react-redux'


class ProjectDetails extends React.Component {
    render() {
        return (
            <div className="project-details">
                <div className="name">{this.props.project.name}</div>
                <div className="description">{this.props.project.description}</div>
            </div>
        )
    }
}


function mapStateToProps({projects}) {
    return {
        projectUid: projects.selected,
        project: projects.selected && projects.list[projects.selected] //TODO add error check
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)
