import React from 'react'
import {connect} from 'react-redux'

import ActionGenerator from '~/redux/actions/actions-generator'


class AddProjectForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            description: ""
        }
    }

    render() {
        return (
            <form className="add-project-form" onSubmit={e => this.onSubmit(e)}>
                <h1>Add new project</h1>
                <input
                    name="name"
                    type="text"
                    ref={input => this.nameInput = input}
                    onChange={e => this.inputChange(e)}
                    placeholder="Name"
                />
                <input
                    name="description"
                    type="text"
                    ref={input => this.descriptionInput = input}
                    onChange={e => this.inputChange(e)}
                    placeholder="Description"
                />

                <div className="buttons">
                    <input type="submit" className="add" value="Add"/>
                    <input type="button" className="cancel" value="Cancel" onClick={() => this.onCancel()}/>
                </div>
            </form>
        )
    }

    inputChange({target}) {
        this.setState({[target.name]: target.value})
    }

    onSubmit(event) {
        event.preventDefault()
        this.props.onSubmit(this.state.name, this.state.description) //TODO add validation
        this.resetInputs()
    }

    onCancel() {
        this.props.onCancel()
        this.resetInputs()
    }

    resetInputs() {
        this.nameInput.value = ""
        this.descriptionInput.value = ""
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (name, description) => dispatch(ActionGenerator.submitProject(name, description)),
        onCancel: () => dispatch(ActionGenerator.cancelAddProject())
    }
}

export default connect(null, mapDispatchToProps)(AddProjectForm)
