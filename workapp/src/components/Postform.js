import React, {Component} from 'react'
import {Button} from 'react-bootstrap';
class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange($event) {
        this.setState({[$event.target.name]: $event.target.value})
    }

    onSubmit($event) {
        $event.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then((res) => res.json())
            .then((data) => console.log(data));
    }

    render() {
        return (
            <div>
                <h1>Add post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input id="title" name="title" onChange={this.onChange} type="text" value={this.state.title}/>
                    </div>
                    <div>
                        <label htmlFor="body">Body: </label>
                        <textarea id="body" name="body" onChange={this.onChange} type="text" value={this.state.body}/>
                    </div>
                    <Button type="submit">add</Button>
                </form>
            </div>
        );
    }
}

export default Postform;