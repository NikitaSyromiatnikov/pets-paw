import { applyMiddleware, createStore, combineReducers } from 'redux';

import logger from 'redux-logger';

import votingReducer from './votingReducer';
import activityReducer from './activityReducer';

const rootReducer = combineReducers({
    voting: votingReducer,
    activity: activityReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
