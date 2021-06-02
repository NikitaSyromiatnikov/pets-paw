import './DislikesPage.css';

import BackLink from '../back/BackLink';
import DislikedImages from './DislikedImages';
import ActionsLoader from '../loader/ActionsLoader';

import { connect } from 'react-redux';
import { fetchActionsData, fetchActionsImages } from '../../api/client';

const DislikesPage = ({ isLoading, actions, images, error, dispatch }) => {
    if (isLoading && !actions)
        fetchActionsData(dispatch);

    if (isLoading && actions && !error)
        fetchActionsImages(actions, dispatch);

    const filterDislikedImages = () => {
        const dislikedImages = [];

        for (let i = 0; i < actions.length; i++) {
            let image = {};

            if (actions[i].value === 0) {
                image = images.find(image => image.id === actions[i].image_id);
                dislikedImages.push({ image: image, vote_id: actions[i].id });
            }
        }

        return dislikedImages;
    }

    const requestUpdate = () => {
        fetchActionsData(dispatch);
    }

    return (
        <div className="container">
            <BackLink base="/voting" label="DISLIKES" refresh={true} refreshFunction={requestUpdate} />
            {isLoading && <ActionsLoader />}
            {!isLoading && <DislikedImages images={filterDislikedImages()} />}
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.actions.isLoading,
    actions: state.actions.actions,
    images: state.actions.images,
    error: state.actions.error
})

export default connect(mapStateToProps)(DislikesPage);