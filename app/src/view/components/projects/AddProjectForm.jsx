import React from 'react'
import {connect} from 'react-redux'

import ActionGenerator from '~/redux/actions/actions-generator'
import {Form, Input} from '../generic/validation'
import Validate from '~/model/validators'


class AddProjectForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Form
                name="add-project"
                className="add-project-form"
                onSubmit={({name, description}) => this.props.onSubmit(name, description)} //TODO make project a single object
            >
                <h1>Add a project</h1>
                <Input type="text" name="name" validator={Validate.projectName}/>

                <div className="buttons">
                    <input type="submit" value="Add"/>
                    <button className="cancel" onClick={() => this.props.onCancel()}>Cancel</button>
                </div>
            </Form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (name, description) => dispatch(ActionGenerator.submitProject(name, description)),
        onCancel: () => dispatch(ActionGenerator.cancelAddProject())
    }
}

export default connect(null, mapDispatchToProps)(AddProjectForm)
