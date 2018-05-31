import React, {Component} from 'react'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        console.log('initializing Posts component')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => this.setState({posts: data}));
    }

    render() {
        const postList = this.state.posts.map((post) => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

        return (
            <div>
                <h1>posts</h1>
                {postList}
            </div>
        );
    }
}

export default Posts;