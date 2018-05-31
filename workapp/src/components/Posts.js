import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; // connects components to redux store provided by Provider component
import {fetchPosts} from "../actions/postActions";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        console.log('initializing Posts component');
        this.props.fetchPosts();
    }

    render() {
        const postList = this.props.posts.map((post) => (
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

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, {fetchPosts})(Posts);
