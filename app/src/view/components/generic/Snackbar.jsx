import React from 'react'


class Snackbar extends React.Component {
    render() {
        return (
            <div className={`snackbar ${this.props.className || ''}`}>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Snackbar
