import React from 'react'
import {connect} from 'react-redux'


class Dialog extends React.Component {
    get adclass() { return this.props.mode ? 'visible' : ''}

    render() {
        return (
            <div className={`dialog ${this.adclass}`}>
                <div className="dialog-window">
                    {this.getChild()}
                </div>
            </div>
        )
    }

    getChild() {
        switch(this.props.mode) {
        }
        return 'Hello'
        
    }
}


function mapStateToProps(state) {
    return {
        mode: 2
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog)