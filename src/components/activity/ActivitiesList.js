import { incrementPage, decrementPage, changeItemsPerPage } from '../../redux/actions/activityActions';

import back from './images/back.svg';
import shevron from './images/shevron.svg';
import ActivityItem from './ActivityItem';

import React from 'react';

const ActivitiesList = ({ page, pages, items, activities, dispatch }) => {
    const activityItems = [];
    const items_per_page = React.createRef();

    const start = (page - 1) * items;
    const end = page * items;

    for (let i = start; i < end; i++)
        activityItems.push(activities[i]);

    const increment = () => dispatch(incrementPage());
    const decrement = () => dispatch(decrementPage());
    const handleSelect = () => dispatch(changeItemsPerPage(items_per_page.current.value));

    return (
        <div className="activities-list">
            {activityItems.map((item, index) => <ActivityItem key={index} item={item} />)}
            <div className="activities-pagination">
                <div className="activities-pages">
                    <button className="activity-pages-button" onClick={decrement}>
                        <img className="activity-button-front" src={back} alt='back'></img>
                    </button>
                    <div className="activity-pages-current">{page} / {pages}</div>
                    <button className="activity-pages-button" onClick={increment}>
                        <img className="activity-button-back" src={back} alt='front'></img>
                    </button>
                </div>
                <div className="activity-items">
                    <select className="activity-items-select" ref={items_per_page} value={items} onChange={handleSelect}>
                        <option value="5">5 items per page</option>
                        <option value="10">10 items per page</option>
                        <option value="15">15 items per page</option>
                    </select>
                    <img className="activity-items-select-shevron" src={shevron} alt='shevron'></img>
                </div>
            </div>
        </div>
    );
};

export default ActivitiesList;