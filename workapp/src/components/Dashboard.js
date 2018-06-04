import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {isLoaded, isEmpty} from 'react-redux-firebase'
import {withRouter} from 'react-router-dom'
import {UserIsAuthenticated} from "../auth/authService";
import {Work} from "./work/work";

// https://github.com/mjrussell/redux-auth-wrapper should probably checkout this
class Dashboard extends Component {
    render() {
        return (
            <Work/>
        )
    }
}


export default compose(UserIsAuthenticated, connect(
    ({firebase: {auth}}) => ({authExists: !!auth && !!auth.uid})
))(Dashboard);
