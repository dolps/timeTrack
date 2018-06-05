import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {isLoaded, isEmpty} from 'react-redux-firebase'
import {withRouter} from 'react-router-dom'
import {UserIsAuthenticated} from "../auth/authService";
import {Work, Work2} from "./work/work";
import {firebaseConnect} from "react-redux-firebase";
import {AddWork} from "./work/addWork";

// https://github.com/mjrussell/redux-auth-wrapper should probably checkout this
class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    onCreateTodo(aTodo) {
        console.log('in Dashboard component onCreateTodo: ' + JSON.stringify(aTodo));
        const pushTodo = () => this.props.firebase.push('work', aTodo);
        pushTodo();
    }

    render() {
        const {todos, work} = this.props;
        console.log('work: ' + JSON.stringify(work));

        const workList = !isLoaded(work) ? 'Loading' : isEmpty(work) ? 'Worklist is empty' : Object.keys(work)
            .map((key, id) => (
                <div key={key} id={id}>{work[key].dateWorked} {work[key].typeOfWork} {work[key].hoursWorked}</div>
            ));

        return (
            <div>
                <AddWork createTodo={this.onCreateTodo.bind(this)}/> {/*form for adding work*/}
                <hr/>

                workList:
                <ul>
                    <li>
                        {workList}
                    </li>
                </ul>
            </div>

        )
    }
}

Dashboard.propTypes = {
    firebase: PropTypes.shape({
        push: PropTypes.func.isRequired,
    })
};

// what properties from the global state we want to pass to the component
const mapStateToProps = (state) => {
    return {
        work: state.firebase.data.work
    };
};

// not working can be removed
const mapDispatchToProps = (dispatch) => {
    return {};
};

export default compose(UserIsAuthenticated,
    firebaseConnect(['work']), // maps to firebase array
    connect(mapStateToProps, mapDispatchToProps)
)(Dashboard)
