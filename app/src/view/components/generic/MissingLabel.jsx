import React from 'react'


class MissingLabel extends React.Component {
    render() {
        return (
            <div className="missing-label">
                {this.props.children}
            </div>
        )
    }
}

export default MissingLabel
