import {
    REQUEST_ACTIVITIES,
    ACTIVITIES_SUCCESS,
    ACTIVITIES_FAILURE,
    INCREMENT_PAGE,
    DECREMENT_PAGE,
    FIRST_PAGE,
    LAST_PAGE,
    ADD_NEW_ACTIVITY,
    CHANGE_ITEMS_PER_PAGE,
} from './activityActions.d';

export const requestActivities = () => ({ type: REQUEST_ACTIVITIES });

export const activitiesSuccess = (activities) => ({
    type: ACTIVITIES_SUCCESS,
    payload: {
        activities: activities
    }
});

export const activitiesFailure = (error) => ({
    type: ACTIVITIES_FAILURE,
    payload: {
        error: error
    }
});

export const addNewActivity = (activity) => ({
    type: ADD_NEW_ACTIVITY,
    payload: {
        activity: activity
    }
});

export const changeItemsPerPage = (items) => ({
    type: CHANGE_ITEMS_PER_PAGE,
    payload: {
        items_per_page: items
    }
});

export const incrementPage = () => ({ type: INCREMENT_PAGE });
export const decrementPage = () => ({ type: DECREMENT_PAGE });
export const firstPage = () => ({ type: FIRST_PAGE });
export const lastPage = () => ({ type: LAST_PAGE });