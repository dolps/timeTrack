import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Jumbotron, Grid} from 'react-bootstrap';
import Game from "./Game";
import Posts from "./components/Posts"
import Todos from "./components/Todos"
import Postform from "./components/Postform"
import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Navbar inverse fixedTop>
                        <Grid>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="/">React app</a>
                                </Navbar.Brand>
                            </Navbar.Header>
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
                </div>
            </Provider>

        );
    }
}

export default App;
