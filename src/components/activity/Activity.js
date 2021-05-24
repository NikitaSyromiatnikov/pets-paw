import './Activity.css';

import { requestActivities, activitiesSuccess, activitiesFailure } from '../../redux/actions/activityActions';
import { connect } from 'react-redux';

import axios from 'axios';
import ActivitiesList from './ActivitiesList';
import ActivityLoader from '../loader/ActivityLoader';

const Activity = ({ isLoading, activities, page, pages, items_per_page, dispatch }) => {
    if (isLoading && !activities)
        fetchData(dispatch);

    return (
        <div className="activity-container">
            {isLoading && <ActivityLoader />}
            {!isLoading && <ActivitiesList page={page} pages={pages} activities={activities} items={items_per_page} dispatch={dispatch} />}
        </div>
    );
}

const fetchData = (dispatch) => {
    const config = { headers: { 'X-Api-Key': 'd6269168-7769-4775-8912-dad584ad6b69' } };
    const favourites = { url: 'https://api.thedogapi.com/v1/favourites' };
    const voted = { url: 'https://api.thedogapi.com/v1/votes' };

    dispatch(requestActivities());

    const request_favourites = axios.get(favourites.url, config);
    const request_voted = axios.get(voted.url, config);

    axios.all([request_favourites, request_voted])
        .then(res => {
            const activities = [...res[0].data, ...res[1].data].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            dispatch(activitiesSuccess(activities));
        })
        .catch(err => dispatch(activitiesFailure(err)));
};

const mapStateToProps = ({ activity }) => ({
    isLoading: activity.isLoading,
    activities: activity.activities,
    error: activity.error,
    page: activity.page,
    pages: activity.pages,
    items_per_page: activity.items_per_page,
});

export default connect(mapStateToProps)(Activity);