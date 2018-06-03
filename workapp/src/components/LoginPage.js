import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase'
import {Navbar, Jumbotron, Grid, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';
import '.././App.css';
// import GoogleButton from 'react-google-button' // optional

// todo more auth stuff https://tylermcginnis.com/react-router-protected-routes-authentication/
// todo check this for firebase https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
const INITIAL_STATE = {email: '', authenticated: false};

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    login() {

    }

    render() {
        const {firebase, auth} = this.props;
        const {history} = this.props;
        //history.push(routes.DASHBOARD_ROUTE);

        return (
            <div>
                <Grid>
                    <div>
                        <h2>Auth</h2>
                        {
                            !isLoaded(auth) ? <span>Loading...</span> : isEmpty(auth) ?
                                <span>Not Authed</span> : <pre>{JSON.stringify(auth, null, 2)}</pre>
                        }
                        <button onClick={() => firebase.login({provider: 'google', type: 'popup'})}>Login With Google
                        </button>
                    </div>
                </Grid>
            </div>
        );
    }
}

LoginPage.propTypes = {
    firebase: PropTypes.shape({
        login: PropTypes.func.isRequired
    }),
    auth: PropTypes.object
};

export default compose(firebaseConnect(), // withFirebase can also be used
    connect(({firebase: {auth}}) => ({auth}))
)(LoginPage)
