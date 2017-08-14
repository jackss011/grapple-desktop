import React from 'react'
import UserInfo from './UserInfo'
import HeaderButton from './HeaderButton'
import SoftButton from './SoftButton'
import {connect} from 'react-redux'
import ActionsGenerator from '~/redux/actions/actions-generator'


class Header extends React.Component {
    render() {
        return (
            <header>
                <span className="logo">Grapple</span>
                <div>
                    {this.props.ready ?
                        (this.props.needsLogin ?
                        <SoftButton action={this.props.onSignIn}>Sign In</SoftButton> :
                        <UserInfo/>) 
                    : null}
                    <HeaderButton />
                </div>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        ready: !state.initializing,
        needsLogin: state.user == null
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSignIn: () => dispatch(ActionsGenerator.signIn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
