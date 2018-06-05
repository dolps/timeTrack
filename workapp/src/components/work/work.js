import React, {Component} from 'react';
import {AddWork} from "./addWork";

export class Work extends Component {
    constructor(props) {
        super(props);

        console.log('props in work: ' + JSON.stringify(this.props));

    }

    onCreateTodo() {
        console.log('in work create todo');
        const sampleTodo = {text: 'Sample', done: false};
        this.props.createTodo(sampleTodo);
    }

    render() {
        const sampleTodo = {text: 'Sample', done: false};
        const pushSample = () => this.props.pushSample();
        return (
            <div>
                <button onClick={this.onCreateTodo.bind(this)}> create todo</button>
                <div>worklist</div>
            </div>
        )
    }

}

export const Work2 = (props) => {
    console.log('what');
    const sampleTodo = {text: 'aSample', done: false};

    return (
        <div>
            <button onClick={() => props.createTodo(sampleTodo)}> create todo</button>
        </div>
    )
};
