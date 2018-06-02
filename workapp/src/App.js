import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Jumbotron, Grid, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import Game from "./Game";
import Posts from "./components/Posts"
import Todos from "./components/Todos"
import Postform from "./components/Postform"
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import store from './store'
import LoginPage from "./components/LoginPage";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar inverse fixedTop>
                            <Grid>
                                <Navbar.Header>
                                    <Navbar.Brand>
                                        <a href="/">React app</a>
                                    </Navbar.Brand>
                                </Navbar.Header>
                                <Nav pullRight={true}>
                                    <NavItem eventKey={1} href="#">
                                        Dashboard
                                    </NavItem>
                                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                        <MenuItem eventKey={3.1}><NavLink to="login">Login</NavLink></MenuItem>
                                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                        <MenuItem divider/>
                                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                                    </NavDropdown>
                                </Nav>
                            </Grid>
                        </Navbar>
                        <Jumbotron>
                            <Grid>
                                <img src={logo} className="App-logo" alt="logo"/>
                                <h1 className="App-title">Welcome to React</h1>
                            </Grid>
                            <p className="App-intro">
                                To get started, edit <code>src/App.js</code> and save to reload.
                            </p>
                        </Jumbotron>
                        <Route exact path="/login" component={LoginPage}></Route>
                        {/*
                    <Grid>
                        <Game/>
                    </Grid>
                    <Grid>
                        <Todos/>
                    </Grid>
                    <Grid>
                        <Postform/>
                        <hr/>
                        <Posts/>
                    </Grid>
                    */}

                    </div>
                </Router>
            </Provider>

        );
    }
}

export default App;
