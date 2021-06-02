import {
    REQUEST_ACTIONS,
    ACTIONS_SUCCESS,
    ACTIONS_FAILURE,
    REQUEST_ACTIONS_IMAGES,
    ACTIONS_IMAGES_SUCCESS,
    ACTIONS_IMAGES_FAILURE,
    REQUEST_DELETE_VOTE,
    DELETE_VOTE_SUCCESS,
    DELETE_VOTE_FAILURE
} from '../actions/actionsActions.d';

const errorMessages = {
    images: 'Could not load images, please check your internet connection...',
    actions: 'Could not load actions, please check your internet connection...'
};

const initialActionsState = {
    isLoading: true,
    actions: null,
    images: null,
    error: null
};

export default function actionsReducer(state = initialActionsState, action) {
    switch (action.type) {
        case REQUEST_ACTIONS:
            return {
                ...state,
                isLoading: true,
                error: null,
            }

        case ACTIONS_SUCCESS:
            return {
                ...state,
                actions: action.payload.actions,
            }

        case ACTIONS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: errorMessages.actions,
            }

        case REQUEST_ACTIONS_IMAGES: 
            return {
                ...state,
                isLoading: true
            }    

        case ACTIONS_IMAGES_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
                images: action.payload.images,
            }

        case ACTIONS_IMAGES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: errorMessages.images
            }

        case REQUEST_DELETE_VOTE:
            return state;

        case DELETE_VOTE_SUCCESS:
            return {
                ...state,
                actions: state.actions.filter(item => item.id !== action.payload.vote_id),
            }

        case DELETE_VOTE_FAILURE:
            return state;

        default:
            return state;
    }
};