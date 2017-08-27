import React from 'react'

import Space from '../../generic/Space'
import DateLabel from '../../generic/DateLabel'

class ProjectRow extends React.Component {
    render() {
        return (
            <div className="project-row" onClick={() => this.clicked()}>
                <div className="top">
                    <div className="name">{this.props.project.name}</div>
                    <DateLabel timestamp={this.props.project.timestamp}/>
                </div>

                <div className="description">{this.props.project.description}</div>

                {this.props.isSelected && <div className="selected-dot"/>}
            </div>
        )
    }

    clicked() {
        if(this.props.onClick) this.props.onClick(this.props.uid)
    }
}

export default ProjectRow
