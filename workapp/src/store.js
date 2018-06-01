import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers';
import firebase from 'firebase';
import {reactReduxFirebase}from 'react-redux-firebase';

const initialState = {};
const middleWare = [thunk];

const fbConfig = {
    apiKey: "AIzaSyAfebGSu3uuksY0w9rC_3BLuuBHfBSwJzE",
    authDomain: "workapp-37dd8.firebaseapp.com",
    databaseURL: "https://workapp-37dd8.firebaseio.com",
    projectId: "workapp-37dd8",
    storageBucket: "workapp-37dd8.appspot.com",
    messagingSenderId: "936379688730"
};
firebase.initializeApp(fbConfig);
const rrfConfig = {
    userProfile: 'users'
};

const store = createStore(rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare),
        reactReduxFirebase(firebase, rrfConfig)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;
