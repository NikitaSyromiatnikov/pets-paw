import './VotingPage.css';

import Nav from '../nav/Nav';
import BackLink from '../back/BackLink';
import Activity from '../activity/Activity';
import ImageLoader from '../loader/ImageLoader';
import ImageLoadError from '../error/ImageLoadError';
import VotingImage from './voting-image/VotingImage';
import LikesPage from '../likes/LikesPage';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { requestVotingImage, votingImageSuccess, votingImageFailure } from '../../redux/actions/votingActions';

import axios from 'axios';

/**
 * @returns JSX that renders a VotingPage component
 */
const VotingPage = ({ isLoading, image, error, dispatch }) => {
    if (isLoading && !image)
        fetchData(dispatch);

    return (
        <div className="wrapper">
            <Nav />
            <div className="voting">
                <Switch>
                    <Route exact path="/voting">
                        <BackLink base="/voting" label="voting" />
                        {isLoading && <ImageLoader />}
                        {error && <ImageLoadError message={error} />}
                        {!isLoading && image && <VotingImage image={image[0]} />}
                        <Activity />
                    </Route>
                    <Route path="/voting/likes">
                        <LikesPage />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

const fetchData = (dispatch) => {
    const config = { header: { 'x-api-token': 'd6269168-7769-4775-8912-dad584ad6b69' } };
    const url = 'https://api.thedogapi.com/v1/images/search';

    dispatch(requestVotingImage());

    axios.get(url, config)
        .then(res => dispatch(votingImageSuccess(res.data)))
        .catch(err => dispatch(votingImageFailure(err)));
}

const mapStateToProps = ({ voting }) => ({
    isLoading: voting.isLoading,
    image: voting.image,
    error: voting.error,
});

export default connect(mapStateToProps)(VotingPage);