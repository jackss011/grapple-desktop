import React from 'react'
import {connect} from 'react-redux'


class ProjectDetails extends React.Component {
    render() {

        if(!this.props.project) return <div className="project-details"/> //TODO ADD SPINNER HERE

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
        project: projects.selected && projects.list && projects.list.hasOwnProperty(projects.selected) && projects.list[projects.selected]
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)
