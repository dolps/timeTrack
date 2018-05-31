import {FETCH_POSTS, ADD_POSTS} from "./types";

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
}
