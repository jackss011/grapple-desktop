import React from 'react'


class ProjectRow extends React.Component {
    get adclass() { return this.props.isSelected ? 'selected' : '' }

    render() {
        return (
            <div className={`project-row ${this.adclass}`} onClick={() => this.clicked()}>
                <div className="name">{this.props.project.name}</div>
                <div className="description">{this.props.project.description}</div>
            </div>
        )
    }

    clicked() {
        if(this.props.onClick) this.props.onClick(this.props.uid)
    }
}

export default ProjectRow
