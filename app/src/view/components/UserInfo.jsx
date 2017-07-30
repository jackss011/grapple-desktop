import React from 'react'
import {connect} from 'react-redux'

import Popup from './Popup'

class UserInfo extends React.Component {
    render() {
        return (
            <div className="user-info">
                <img className="profile-image" src={this.props.user ? this.props.user.photoURL : ""}/>
                <span className="user-name">{this.props.user ? this.props.user.displayName : "Login required"}</span>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.user })
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
