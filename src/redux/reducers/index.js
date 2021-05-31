import { applyMiddleware, createStore, combineReducers } from 'redux';

import logger from 'redux-logger';

import votingReducer from './votingReducer';
import activityReducer from './activityReducer';
import actionsReducer from './actionsReducer';

const rootReducer = combineReducers({
    voting: votingReducer,
    activity: activityReducer,
    actions: actionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
