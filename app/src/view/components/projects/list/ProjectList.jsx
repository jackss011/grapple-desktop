import React from 'react'
import {connect} from 'react-redux'

import ProjectsSpinner from '../ProjectsSpinner'
import ProjectRow from './ProjectRow'
import ProjectListHeader from './ProjectListHeader'

import ActionsGenerator from '~/redux/actions/actions-generator'


class ProjectList extends React.Component {
    render() {
        return (
            <div className="projects-list">
                <ProjectListHeader/>
                <hr/>
                <div className="list">
                    {this.createList()}
                </div>
                {this.props.initial_loading && <ProjectsSpinner/>}
            </div>
        )
    }

    createList() {
        if(this.props.projects == null) return;

        return Object.entries(this.props.projects).map(
            ([uid, project]) => (
                <ProjectRow
                    key={uid}
                    uid={uid}
                    project={project} 
                    onClick={() => this.selectProject(uid)}
                />
            )
        )
    }

    selectProject(uid) {
        this.props.onSelect(uid)
    }
}

function mapStateToProps({projects}) {
    return {
        projects: projects.list,
        initial_loading: projects.initial_loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSelect: uid => dispatch(ActionsGenerator.selectProject(uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)