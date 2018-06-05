import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import {compose} from "redux";
import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase'

export class AddWork extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            dateWorked: '',
            hoursWorked: 0,
            typeOfWork: ''
        }
        console.log('props: ' + JSON.stringify(this.props));
    }

    submitData() {
        // this.props.firebase.push('work', this.state);
    }

    getValidationState() {
        return 'success'; // warning and error can also be returned
        /*
        const length = this.state.value.length; // can check for length
        */
    }

    handleChange($event) {
        this.setState({[$event.target.name]: $event.target.value})

        console.log(JSON.stringify(JSON.stringify(this.state)));
    }

    createOptList = (n) => {
        let optList = [];
        for (let i = 0; i < n; i++) {
            optList.push(<option value={i} key={i}>{i}</option>);
        }

        return optList;
    };

    render() {
        return (
            <div>
                <div>Add work</div>
                <form>
                    <FormGroup controlId="formBasicText"
                               validationState={this.getValidationState()}>
                        <ControlLabel>Date worked</ControlLabel>
                        <FormControl
                            type="date"
                            name="dateWorked"
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback/>
                    </FormGroup>

                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Number of hours worked</ControlLabel>
                        <FormControl componentClass="select"
                                     name="hoursWorked"
                                     onChange={this.handleChange}
                                     placeholder="select">
                            {this.createOptList(12)}
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="formBasicText"
                               validationState={this.getValidationState()}>
                        <ControlLabel>Type of work</ControlLabel>
                        <FormControl
                            type="text"
                            name="typeOfWork"
                            placeholder="Enter text"
                            onChange={this.handleChange}/>
                        <FormControl.Feedback/>
                    </FormGroup>

                    <Button onClick={this.submitData()}>Submit</Button>
                </form>
            </div>

        )
    }

}

AddWork.propTypes = {
    firebase: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

export default compose(
    firebaseConnect(['work']),
    connect((state) => ({
        work: state.firebase.data.work
    }))
)(AddWork)
