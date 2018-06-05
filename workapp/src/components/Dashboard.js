import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {isLoaded, isEmpty} from 'react-redux-firebase'
import {withRouter} from 'react-router-dom'
import {UserIsAuthenticated} from "../auth/authService";
import {Work} from "./work/work";
import {firebaseConnect} from "react-redux-firebase";

// https://github.com/mjrussell/redux-auth-wrapper should probably checkout this
class Dashboard extends Component {
    constructor(props) {
        super(props);

        console.log('in dashboard: ' + JSON.stringify(props));
    }

    sample(aTodo) {
        //const {firebase} = this.props;

        console.log('hello');
        //const pushSample = () => this.props.firebase.push('todos', aTodo);
        //pushSample();
    }

    onCreateTodo(aTodo) {
        console.log('datodo: ' + JSON.stringify(aTodo));
        const pushTodo = () => this.props.firebase.push('todos', aTodo);
        pushTodo();
    }

    render() {
        return (
            <Work pushSample={this.sample.bind(this)} createTodo={this.onCreateTodo.bind(this)}/>
        )
    }
}

Dashboard.propTypes = {
    firebase: PropTypes.shape({
        login: PropTypes.func.isRequired,
    }),
    auth: PropTypes.object
};


// export default withFirebase(Todos);
export default compose(UserIsAuthenticated,
    firebaseConnect(['todos']), // maps to firebase array
    connect((state) => ({
        todos: state.firebase.data.todos
    }))
)(Dashboard)
