import {FETCH_POSTS, ADD_POSTS} from "../actions/types";

const initialState = {
    items: [],
    item: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log('in reducer');
            return {...state, items: action.payload};
        default:
            return state;
    }
}
