import React from 'react'
import {connect} from 'react-redux'

import AddProjectButton from '../AddProjectButton'
import AddProjectForm from '../AddProjectForm'

import ActionGenerator from '~/redux/actions/actions-generator'


class ProjectHeader extends React.Component {
    render() {
        return (
            <div className="projects-header">
                {!this.props.adding 
                    ? <AddProjectButton/> 
                    : <AddProjectForm/>
                } 
            </div>
        )   
    }
}

function mapStateToProps(state) {
    return {
        adding: state.projects.adding
    }
}

export default connect(mapStateToProps)(ProjectHeader)