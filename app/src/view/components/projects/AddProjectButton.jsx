import React from 'react'
import {connect} from 'react-redux'

import ActionGenerator from '~/redux/actions/actions-generator'


class AddProjectButton extends React.Component {
    render() {
        return (
            <button 
                className="add-project" 
                onClick={() => this.props.onAddProject()}
            >
                Add Project
            </button>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onAddProject: () => dispatch(ActionGenerator.addProject())
    }
}

export default connect(null, mapDispatchToProps)(AddProjectButton)