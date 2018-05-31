import {FETCH_POSTS, ADD_POST} from "./types";

/**
 * dispatch == resolver/promise
 */
export const fetchPosts = () => dispatch => {
    console.log('fetching posts');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((posts) => dispatch({
            type: FETCH_POSTS,
            payload: posts // payload could be whatever
        }));
};

export const addPost = (post) => dispatch => {
    console.log('add post');

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then((res) => res.json())
        .then((post) => dispatch({
            type: ADD_POST,
            payload: post // payload could be whatever
        }));
};
