import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {isLoaded, isEmpty} from 'react-redux-firebase'
import {withRouter} from 'react-router-dom'
import {UserIsAuthenticated} from "../auth/authService";
import {Work, Work2} from "./work/work";
import {firebaseConnect} from "react-redux-firebase";

// https://github.com/mjrussell/redux-auth-wrapper should probably checkout this
class Dashboard extends Component {
    constructor(props) {
        super(props);

        console.log('in dashboard: ' + JSON.stringify(props));
    }

    // todo remove this
    sample(aTodo) {
        console.log('sampletest');
    }

    onCreateTodo(aTodo) {
        console.log('in Dashboard component onCreateTodo: ' + JSON.stringify(aTodo));
        const pushTodo = () => this.props.firebase.push('todos', aTodo);
        pushTodo();
    }

    render() {
        const {todos} = this.props;
        const todosList = !isLoaded(todos) ?
            'Loading' : isEmpty(todos) ?
                'Todo list is empty' : Object.keys(todos).map(
                    (key, id) => (
                        <div key={key} id={id}>{todos[key].text}</div>
                    )
                );

        return (
            <div>
                <Work pushSample={this.sample.bind(this)} createTodo={this.onCreateTodo.bind(this)}/>
                <Work2 createTodo={this.onCreateTodo.bind(this)}/>
                <ul>
                    <li>
                        {todosList}
                    </li>
                </ul>
            </div>

        )
    }
}

Dashboard.propTypes = {
    firebase: PropTypes.shape({
        login: PropTypes.func.isRequired,
    }),
    auth: PropTypes.object
};

// what properties from the global state we want to pass to the component
const mapStateToProps = (state) => {
    return {
        todos: state.firebase.data.todos
    };
};

// not working can be removed
const mapDispatchToProps = (dispatch) => {
    return {};
};

// connect connects react with redux
// export default withFirebase(Todos);
export default compose(UserIsAuthenticated,
    firebaseConnect(['todos']), // maps to firebase array
    connect(mapStateToProps, mapDispatchToProps)
)(Dashboard)
