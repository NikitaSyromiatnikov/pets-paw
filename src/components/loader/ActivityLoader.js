import './ActivityLoader.css';

import ContentLoader from 'react-content-loader';

const ActivityLoader = () => {
    return (
        <div className="activity-loader-container">
            <ContentLoader className="activity-loader">
                <rect x="0" y="0" rx="20" ry="20" width="640" height="60" />
            </ContentLoader>
            <ContentLoader className="activity-loader">
                <rect x="0" y="0" rx="20" ry="20" width="640" height="60" />
            </ContentLoader>
            <ContentLoader className="activity-loader">
                <rect x="0" y="0" rx="20" ry="20" width="640" height="60" />
            </ContentLoader>
        </div>
    );
}

export default ActivityLoader;