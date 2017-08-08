import React from 'react'

class AddProjectButton extends React.Component {
    render() {
        return <button className="add-project" onClick={this.props.onClick}>Add Project</button>
    }
}

export default AddProjectButton