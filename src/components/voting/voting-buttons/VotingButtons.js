import './VotingButtons.css';

import axios from 'axios';

import like from './images/like.svg';
import dislike from './images/dislike.svg';
import favourite from './images/favourite.svg';

import { connect } from 'react-redux';
import { addNewActivity } from '../../../redux/actions/activityActions';

const VotingButtons = ({ id, dispatch }) => {
    const config = { headers: { 'X-Api-Key': 'd6269168-7769-4775-8912-dad584ad6b69' } };

    const voteImage = (id, sub_id, value) => {
        const data = {
            image_id: id,
            sub_id: sub_id,
            value: value,
        };

        axios.post('https://api.thedogapi.com/v1/votes', data, config)
            .then(res => {
                const dateString = new Date().toISOString();
                dispatch(addNewActivity({ id: res.data.id, image_id: id, value: value, created_at: dateString }));
            })
            .catch(err => { console.log(err); });
    }

    const addImageToFavourites = (id, sub_id) => {
        const data = {
            image_id: id,
            sub_id: sub_id,
        };

        axios.post('https://api.thedogapi.com/v1/favourites', data, config)
            .then(res => {
                const dateString = new Date().toISOString();
                dispatch(addNewActivity({ id: res.data.id, image_id: id, created_at: dateString }));
            })
            .catch(err => { console.log(err) });
    }

    const likeImage = () => voteImage(id, 'default', 1);
    const dislikeImage = () => voteImage(id, 'default', 0);
    const saveImage = () => addImageToFavourites(id, 'default');

    return (
        <div className="voting-buttons-container">
            <button className="voting-button first" onClick={likeImage}>
                <img src={like} alt='like'></img>
            </button>
            <button className="voting-button middle" onClick={saveImage}>
                <img src={favourite} alt='favourite'></img>
            </button>
            <button className="voting-button last" onClick={dislikeImage}>
                <img src={dislike} alt='dislike'></img>
            </button>
        </div>
    );
}

export default connect()(VotingButtons);