import React from 'react'

class ConfirmDialog extends React.Component {
    render() {
        return (
            <div className="confirm-dialog">
                <div className="stuff">{this.props.children}</div>
                <div className="buttons">
                    <button className="confirm" onClick={this.props.onConfirm}>
                        Confirm
                    </button>
                    <button className="cancel" onClick={this.props.onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
}

export default ConfirmDialog
