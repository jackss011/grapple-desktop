import React from 'react'
import {connect} from 'react-redux'

import Popup from '../popup/Popup'
import PopupRow from '../popup/PopupRow'

import ActionGenerator from '~/redux/actions/actions-generator'


class HeaderButton extends React.Component {
    constructor(props) {
        super(props)
        this.clicked = this.clicked.bind(this)
    }

    render() {
        return (
            <div>
                <button className="header-button" onClick={this.clicked}>
                    <i className="material-icons">more_vert</i>
                </button>

                <Popup visible={this.props.headerMenuVisible}>
                    <PopupRow label="Sign Out" enabled={this.props.canSignOut} action={this.props.onSignOut}/>
                </Popup>
            </div>
        )
    }

    clicked(e) {
        this.props.onClickAction()
        e.nativeEvent.stopImmediatePropagation()
    }
}

function mapStateToProps(state) {
    return {
        canSignOut: state.user != null,
        headerMenuVisible: state.headerMenu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClickAction: () => dispatch(ActionGenerator.showHeaderMenu()),
        onSignOut: () => dispatch(ActionGenerator.signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderButton)
