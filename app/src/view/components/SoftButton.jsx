import React from 'react'

class SoftButton extends React.Component {
    render() {
        return <button className="soft-button" onClick={this.props.action}>{this.props.children}</button>
    }
}

export default SoftButton