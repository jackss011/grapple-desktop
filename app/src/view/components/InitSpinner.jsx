import React from 'react'

class InitSpinner extends React.Component {
    render() {
        return (
            <div className="init-spinner">
                <div className="animated-spinner" />
                <div className="init-label">
                    Initializing...
                </div>
            </div>
        )
    }
}
export default InitSpinner 