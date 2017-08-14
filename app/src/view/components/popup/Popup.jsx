import React from 'react'
import {connect} from 'react-redux'


class Popup extends React.Component {

    render() {
        return (
            <div
                className="popup"
                style={{visibility: this.props.visible ? 'visible' : 'hidden'}}
            >
                <div className="popup-inner">{this.props.children}</div>
            </div>
        )
    }
}

export default Popup
