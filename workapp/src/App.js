import React, {Component} from 'react';
import Game from "./Game";
import Posts from "./components/Posts"
import Todos from "./components/Todos"
import Postform from "./components/Postform"
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from './store'
import LoginPage from "./components/LoginPage";
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import {Navbar, Jumbotron, Grid, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Navigation/>
                        <div className="App">

                            <Grid>
                                <Route exact path="/" component={HomePage}></Route>
                                <Route exact path="/login" component={LoginPage}/>
                                <Route exact path="/dashboard" component={HomePage}/>
                            </Grid>


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
                    </div>
                </Router>
            </Provider>

        );
    }
}

export default App;
