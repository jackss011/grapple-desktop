import React from 'react'

class ConfirmDialog extends React.Component {
    render() {
        return (
            <div className={`confirm-dialog ${this.props.className}`}>
                <div className="label">{this.props.children}</div>
                <div className="buttons">
                    <button className="cancel" onClick={this.props.onCancel}>
                        Cancel
                    </button>
                    <button className="confirm" onClick={this.props.onConfirm}>
                        Confirm
                    </button>
                </div>
            </div>
        )
    }
}

export default ConfirmDialog
