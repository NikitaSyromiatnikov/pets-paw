import axios from 'axios';

import { requestActions, actionsSuccess, actionsFailure, requstActionsImages, actionsImagesSuccess, actionsImagesFailure, requestDeleteVote, deleteVoteSuccess, deleteVoteFailure } from '../redux/actions/actionsActions';

axios.interceptors.request.use(req => {
    req.baseURL = 'https://api.thedogapi.com/v1';
    req.headers = { 'x-api-key': 'd6269168-7769-4775-8912-dad584ad6b69' }

    return req;
});

export const fetchActionsData = (dispatch) => {
    dispatch(requestActions());

    const votes = axios.get('/votes');
    const favourites = axios.get('/favourites');

    axios.all([votes, favourites])
        .then(res => {
            const votes = res[0].data;
            const favourites = res[1].data;

            const actions = [...votes, ...favourites].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

            dispatch(actionsSuccess(actions));
        })
        .catch(error => dispatch(actionsFailure(error)));
}

export const fetchActionsImages = (actions, dispatch) => {
    dispatch(requstActionsImages());

    const images = [];
    const requests = [];

    for (let i = 0; i < actions.length; i++) {
        let request = axios.get(`/images/${actions[i].image_id}`);

        requests.push(request);
    }

    axios.all(requests)
        .then(res => {
            for (let i = 0; i < res.length; i++)
                images.push({ id: res[i].data.id, url: res[i].data.url });

            dispatch(actionsImagesSuccess(images));
        })  
        .catch(error => {
            dispatch(actionsImagesFailure(error));
        });
}

export const fetchDeleteVote = (vote_id, dispatch) => {
    dispatch(requestDeleteVote(vote_id));

    axios.delete(`/votes/${vote_id}`)
        .then(res => dispatch(deleteVoteSuccess(vote_id)))
        .catch(error => dispatch(deleteVoteFailure('Could not delete vote')));
}