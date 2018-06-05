import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {isLoaded, isEmpty} from 'react-redux-firebase'
import {UserIsAuthenticated} from "../auth/authService";
import {firebaseConnect} from "react-redux-firebase";
import {AddWork} from "./work/addWork";

// https://github.com/mjrussell/redux-auth-wrapper should probably checkout this
class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    onCreateTodo(aTodo) {
        aTodo.userId = this.props.auth.uid;         // so we can map the work to a user
        this.props.firebase.push('work/' + aTodo.userId, aTodo);
    }

    render() {
        const {work} = this.props;
        const workList = !isLoaded(work) ? 'Loading' : isEmpty(work) ? 'Worklist is empty' : Object.keys(work)
            .map((key, id) => (
                <li key={key} id={id}>{work[key].dateWorked} {work[key].typeOfWork} {work[key].hoursWorked}</li>
            ));

        return (
            <div>
                <AddWork createTodo={this.onCreateTodo.bind(this)}/> {/*form for adding work*/}
                <hr/>

                workList:
                <ul>
                    {workList}
                </ul>
            </div>

        )
    }
}

Dashboard.propTypes = {
    firebase: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
    auth: PropTypes.object
};

// what properties from the global state we want to pass to the component
const mapStateToProps = (state) => {
    return {
        work: state.firebase.data.work,
        profile: state.firebase.profile
    };
};

// not working can be removed
const mapDispatchToProps = (dispatch) => {
    return {};
};

export default compose(UserIsAuthenticated,
    firebaseConnect(['work']), // maps to firebase array
    connect(mapStateToProps, mapDispatchToProps),
    connect(({firebase: {auth}}) => ({auth}))
)(Dashboard)
