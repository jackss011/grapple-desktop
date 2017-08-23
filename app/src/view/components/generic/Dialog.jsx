import React from 'react'
import {connect} from 'react-redux'

import ConfirmDeleteProject from '../projects/details/ConfirmDeleteProject'


class Dialog extends React.Component {
    get adclass() { return this.props.mode ? 'visible' : ''}

    render() {
        return (
            <div className={`dialog ${this.adclass}`}>
                <div className="dialog-window">
                    {this.getChild()}
                </div>
            </div>
        )
    }

    getChild() {
        return this.props.mode && <this.props.mode/>
    }
}


function mapStateToProps({projects}) {
    let mode = null

    if(projects.deleting)
        mode = ConfirmDeleteProject

    return { mode }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog)
