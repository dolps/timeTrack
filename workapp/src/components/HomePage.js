import React from 'react';
import {Navbar, Jumbotron, Grid, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import logo from '.././logo.svg';

const HomePage = () => (
    <Jumbotron>
        <Grid>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
        </Grid>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </Jumbotron>
);

export default HomePage;
