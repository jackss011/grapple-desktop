import React from 'react'
import {connect} from 'react-redux'

import ConfirmDialog from '../../generic/ConfirmDialog'
import ActionGenerator from '~/redux/actions/actions-generator'


class ConfirmDeleteProject extends React.Component {
    render() {
        let name = this.props.project ? this.props.project.name : "nothing"

        return (
            <ConfirmDialog
                onConfirm={() => this.props.onConfirm(this.props.uid)}
                onCancel={this.props.onCancel}
            >
                Do u really want to delete <strong>{name}</strong>?
            </ConfirmDialog>
        )
    }
}

function mapStateToProps({projects}) {
    return {
        project: (projects.list && projects.list.hasOwnProperty(projects.deleting))
            && projects.list[projects.deleting],
        uid: projects.deleting
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onConfirm: uid => dispatch(ActionGenerator.deleteProjectConfirm(true, uid)),
        onCancel: () => dispatch(ActionGenerator.deleteProjectConfirm(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDeleteProject)
