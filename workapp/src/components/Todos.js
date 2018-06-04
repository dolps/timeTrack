import React from 'react';
import ProtoTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase';

const Todos = ({todos, firebase}) => {
    const todosList = !isLoaded(todos) ?
        'Loading' : isEmpty(todos) ?
            'Todo list is empty' : Object.keys(todos).map(
                (key, id) => (
                    <div key={key} id={id}>{todos[key].text}</div>
                )
            );

    const sampleTodo = {text: 'Sample', done: false};
    const pushSample = () => firebase.push('todos', sampleTodo);

    return (
        <div>
            <h1>todos</h1>
            <ul>
                <li>
                    {todosList}
                </li>
            </ul>
            <input type="text"/>
            <button onClick={pushSample}>Add todo</button>
        </div>
    )
};

// export default withFirebase(Todos);
export default compose(
    firebaseConnect(['todos']),
    connect((state) => ({
        todos: state.firebase.data.todos
    }))
)(Todos)
