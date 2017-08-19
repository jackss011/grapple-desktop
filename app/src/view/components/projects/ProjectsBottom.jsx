import React from 'react'
import {connect} from 'react-redux'

import ActionsGenerator from '~/redux/actions/actions-generator'


class ProjectsBottom extends React.Component {
    render() {
        return (
            <div className="projects-bottom">
                {this.props.hasSelected ?
                    <button className="select" 
                        onClick={() => !this.props.isSelecting 
                            ? this.props.onSelect()
                            : this.props.onHide()
                        }
                    >
                        {!this.props.isSelecting ? 'Select' : 'Hide'} 
                    </button>
                    : <div/>
                }
                <button className="add" onClick={this.props.tempAdd}>Add</button>
            </div>
        )
    }
}


function mapStateToProps({projects}) {
    return {
        isSelecting: projects.is_selecting,
        hasSelected: projects.selected != null
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSelect: () => dispatch(ActionsGenerator.showProjectSelection()),
        onHide: () => dispatch(ActionsGenerator.hideProjectSelection()),
        tempAdd: () => dispatch(ActionsGenerator.submitProject('temp', 'Remenber to delete this'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsBottom)