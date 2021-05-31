import './LikesPage.css';

import BackLink from '../back/BackLink';
import LikedImages from './LikedImages';
import ActionsLoader from '../loader/ActionsLoader';

import { connect } from 'react-redux';
import { fetchActionsData, fetchActionsImages } from '../../api/client';

const LikesPage = ({ isLoading, actions, images, error, dispatch }) => {
    if (isLoading && !actions)
        fetchActionsData(dispatch);

    if (isLoading && actions && !error)
        fetchActionsImages(actions, dispatch);

    const filterLikedImages = () => {
        const likedImages = [];

        for (let i = 0; i < actions.length; i++) {
            let image = {};

            if (actions[i].value === 1) {
                image = images.find(image => image.id === actions[i].image_id);
                likedImages.push({ image: image, vote_id: actions[i].id });
            }
        }

        return likedImages;
    }

    return (
        <div className="container">
            <BackLink base="/voting" label="LIKES" />
            {isLoading && <ActionsLoader />}
            {!isLoading && <LikedImages images={filterLikedImages()} />}
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.actions.isLoading,
    actions: state.actions.actions,
    images: state.actions.images,
    error: state.actions.error
})

export default connect(mapStateToProps)(LikesPage);