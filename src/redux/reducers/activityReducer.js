import {
    REQUEST_ACTIVITIES,
    ACTIVITIES_SUCCESS,
    ACTIVITIES_FAILURE,
    INCREMENT_PAGE,
    DECREMENT_PAGE,
    ADD_NEW_ACTIVITY,
    CHANGE_ITEMS_PER_PAGE,
} from '../actions/activityActions.d';

const errorMessage = 'Could not load activities';

const initialActivityState = {
    isLoading: true,
    activities: null,
    error: null,
    page: 1,
    items_per_page: 5,
    pages: null,
};

export default function activityReducer(state = initialActivityState, action) {
    switch (action.type) {
        case REQUEST_ACTIVITIES:
            return {
                ...state,
                isLoading: true,
            }

        case ACTIVITIES_SUCCESS:
            return {
                ...state,
                activities: action.payload.activities,
                isLoading: false,
                pages: Math.ceil(action.payload.activities.length / state.items_per_page)
            }

        case ACTIVITIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: errorMessage,
            }

        case INCREMENT_PAGE:
            if (state.page < state.pages)
                return {
                    ...state,
                    page: state.page + 1,
                }
            return { ...state };

        case DECREMENT_PAGE:
            if (state.page > 1)
                return {
                    ...state,
                    page: state.page - 1,
                }
            return { ...state };

        case ADD_NEW_ACTIVITY:
            return {
                ...state,
                pages: Math.ceil((state.activities.length + 1) / state.items_per_page),
                activities: [action.payload.activity, ...state.activities],
            }

        case CHANGE_ITEMS_PER_PAGE:
            let page = Number(state.page);
            let pages = Math.ceil(state.activities.length / action.payload.items_per_page);

            if (page > pages)
                return {
                    ...state,
                    page: pages,
                    pages: pages,
                    items_per_page: action.payload.items_per_page
                }

            return {
                ...state,
                page: page,
                pages: pages,
                items_per_page: action.payload.items_per_page,
            }

        default:
            return state;
    }
}