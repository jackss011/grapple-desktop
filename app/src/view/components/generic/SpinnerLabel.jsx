import React from 'react'

class SpinnerLabel extends React.Component {
    render() {
        return (
            <div className="spinner">
                <div className="animated-spinner" />
                <div className="label"> 
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default SpinnerLabel