import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import burgerBuildReducer from '../reducers/burgerBuild';
import orderReducer from '../reducers/order';

// Redux dev-tools extension - compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create app store
export default () => {
    const store = createStore(
        combineReducers({
            burger: burgerBuildReducer,
            order: orderReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store;
};