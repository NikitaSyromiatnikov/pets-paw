import {
    REQUEST_VOTING_IMAGE,
    VOTING_IMAGE_SUCCESS,
    VOTING_IMAGE_FAILURE,
    REQUEST_VOTE_IMAGE,
    VOTE_IMAGE_SUCCESS,
    VOTE_IMAGE_FAILURE,
    REQUEST_SAVE_IMAGE,
    SAVE_IMAGE_SUCCESS,
    SAVE_IMAGE_FAILURE,
} from '../actions/votingActions.d';

const initialVotingState = {
    isLoading: true,
    image: null,
    error: null
};

const errorMessage = {
    loading: 'Could not load image, check your internet connection',
    voting: 'Could not vote image, check your interner connection',
    saving: 'Could not save image, check your internet connection',
};

export default function votingReducer(state = initialVotingState, action) {
    switch (action.type) {
        case REQUEST_VOTING_IMAGE:
            return {
                ...state,
                isLoading: true,
                image: null,
            };

        case VOTING_IMAGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                image: action.payload.image,
            };

        case VOTING_IMAGE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: errorMessage.loading
            };

        case REQUEST_VOTE_IMAGE:
            return {
                ...state
            };

        case VOTE_IMAGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                image: null,
                error: null,
            };

        case VOTE_IMAGE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: errorMessage.voting,
            };

        case REQUEST_SAVE_IMAGE:
            return {
                ...state
            };

        case SAVE_IMAGE_SUCCESS:
            return {
                ...state,
                isLoading: true,
                image: null,
                error: null,
            };

        case SAVE_IMAGE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: errorMessage.saving
            };

        default:
            return state;
    }
}