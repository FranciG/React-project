import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
//Initial state is an empty object

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
//Create store
const store = createStore(
rootReducer,
initialState,
enhancer
);
//Export the file to import it to app.js
export default store;