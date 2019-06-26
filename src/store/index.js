import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers';

const store = createStore(
    rootReducers,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
);

export default store;