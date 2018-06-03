import React from 'react';
import {Link} from 'react-router-dom';
import * as routes from '../constants/routes';
import {Navbar, Jumbotron, Grid, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types'

import {compose} from 'redux'
import {connect} from 'react-redux'
import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase'

export const Navigation = ({firebase, auth}) => (
    <Navbar inverse fixedTop>
        <Grid>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">React app</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight={true}>
                <NavItem eventKey={1} href="#">
                </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    {
                        !isLoaded(auth) ? <span>Loading...</span> : isEmpty(auth) ?
                            <MenuItem eventKey={3.1} href={routes.LOGIN_ROUTE}>Login</MenuItem> :
                            <MenuItem eventKey={3.1} onClick={() => firebase.logout()}>Logout</MenuItem>
                    }
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider/>
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        </Grid>
    </Navbar>);

Navigation.propTypes = {
    firebase: PropTypes.shape({
        login: PropTypes.func.isRequired
    }),
    auth: PropTypes.object
};

export default compose(
    firebaseConnect(), // withFirebase can also be used
    connect(({firebase: {auth}}) => ({auth}))
)(Navigation)
