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
} from './actionsActions.d';

export const requestActions = () => ({ type: REQUEST_ACTIONS });

export const actionsSuccess = (actions) => ({
    type: ACTIONS_SUCCESS,
    payload: {
        actions: actions
    }
});

export const actionsFailure = (error) => ({
    type: ACTIONS_FAILURE,
    payload: {
        error: error
    }
});

export const requstActionsImages = () => ({ type: REQUEST_ACTIONS_IMAGES });

export const actionsImagesSuccess = (images) => ({
    type: ACTIONS_IMAGES_SUCCESS,
    payload: {
        images: images
    }
});

export const actionsImagesFailure = (error) => ({
    type: ACTIONS_IMAGES_FAILURE,
    payload: {
        error: error
    }
});

export const requestDeleteVote = (vote_id) => ({
    type: REQUEST_DELETE_VOTE,
    payload: {
        vote_id: vote_id
    }
})

export const deleteVoteSuccess = (vote_id) => ({
    type: DELETE_VOTE_SUCCESS,
    payload: {
        vote_id: vote_id
    }
})

export const deleteVoteFailure = (error) => ({
    type: DELETE_VOTE_FAILURE,
    payload: {
        error: error
    }
})