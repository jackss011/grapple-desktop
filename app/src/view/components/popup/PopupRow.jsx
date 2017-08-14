import React from 'react'
import {connect} from 'react-redux'

class PopupRow extends React.Component {
    constructor(props) {
        super(props)
        this.clicked = this.clicked.bind(this)
    }

    get cssClass() { return `popup-row ${this.props.enabled ? 'enabled' : 'disabled'}`}

    render() {
        return (
            <div className={this.cssClass} onClick={this.clicked}>
                {this.props.label}
            </div>
        )
    }

    clicked(e) {
        if(this.props.enabled) this.props.action()
        e.nativeEvent.stopImmediatePropagation()
    }
}


export default PopupRow