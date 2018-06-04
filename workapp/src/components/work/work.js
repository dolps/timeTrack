import React, {Component} from 'react';
import {AddWork} from "./addWork";

export class Work extends Component {
    render() {
        return (
            <div>
                <AddWork/>
                <div>worklist</div>
            </div>
        )
    }

}

export default (Work);
