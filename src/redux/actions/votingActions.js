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
} from './votingActions.d';

// Loading voting image
export const requestVotingImage = () => ({ type: REQUEST_VOTING_IMAGE });

export const votingImageSuccess = (image) => ({
    type: VOTING_IMAGE_SUCCESS,
    payload: {
        image: image
    }
});

export const votingImageFailure = (error) => ({
    type: VOTING_IMAGE_FAILURE,
    payload: {
        error: error
    }
});

// Voting image
export const requestVoteImage = (image_id, sub_id, value) => ({
    type: REQUEST_VOTE_IMAGE,
    payload: {
        image_id: image_id,
        sub_id: sub_id,
        value: value,
    }
});

export const voteImageSuccess = () => ({ type: VOTE_IMAGE_SUCCESS });
export const voteImageFailure = () => ({ type: VOTE_IMAGE_FAILURE });

// Saving image
export const requestSaveImage = (image_id, sub_id) => ({
    type: REQUEST_SAVE_IMAGE,
    payload: {
        image_id: image_id,
        sub_id: sub_id,
    }
});

export const saveImageSuccess = ({ type: SAVE_IMAGE_SUCCESS });
export const saveImageFailure = ({ type: SAVE_IMAGE_FAILURE });