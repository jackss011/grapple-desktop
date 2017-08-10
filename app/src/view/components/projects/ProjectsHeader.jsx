import React from 'react'
import {connect} from 'react-redux'
import ActionGenerator from '../../../redux/actions/actions-generator'

import AddProjectButton from './AddProjectButton'
import AddProjectForm from './AddProjectForm'

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