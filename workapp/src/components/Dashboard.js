import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {isLoaded, isEmpty} from 'react-redux-firebase'
import {withRouter} from 'react-router-dom'

// https://github.com/mjrussell/redux-auth-wrapper should probably checkout this
class Dashboard extends Component {
    static propTypes = {
        authExists: PropTypes.bool
    };

    componentWillReceiveProps({authExists}) {
        console.log('authExists: ' + authExists);

    }

    render() {
        if (this.props.authExists) {
            return (
                <div>hello</div>
            )
        }
        return (
            <div>whaddapp</div>
        )
    }
}

export default connect(
    ({firebase: {auth}}) => ({authExists: !!auth && !!auth.uid})
)(Dashboard);
