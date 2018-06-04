import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

export class AddWork extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        }
    }

    getValidationState() {
        const length = this.state.value.length;

        if (length >= 3 && length < 10) return 'success';
        else if (length < 3) return 'warning';
        else if (length === 0 || length >= 10) return 'error';

        return null;
    }

    handleChange(e) {
        this.setState({value: e.target.value});

        console.log(this.state.value);
    }

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
                            value={this.state.value}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback/>
                    </FormGroup>

                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Number of hours worked</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="formBasicText"
                               validationState={this.getValidationState()}>
                        <ControlLabel>Type of work</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback/>
                    </FormGroup>

                    <FormGroup controlId="formBasicText"
                               validationState={this.getValidationState()}>
                        <ControlLabel>Example with validation</ControlLabel>
                        <FormControl
                            type="date"
                            value={this.state.value}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback/>
                    </FormGroup>


                    <Button type="submit">Submit</Button>
                </form>
            </div>

        )
    }

}

export default (AddWork);
