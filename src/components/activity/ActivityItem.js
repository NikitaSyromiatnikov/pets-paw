import like from './images/like.svg';
import dislike from './images/dislike.svg';
import favourite from './images/favourite.svg';

const ActivityItem = ({ item }) => {
    if (!item)
        return null;

    const formatTime = () => {
        let hours = new Date(item.created_at).getHours();
        let minutes = new Date(item.created_at).getMinutes();

        if (minutes < 10)
            minutes = `0${minutes}`;

        return `${hours}:${minutes}`;
    }

    const getLabel = () => {
        if (item.value === undefined)
            return "Favourite";

        switch (item.value) {
            case 1:
                return "Likes";

            case 0:
                return "Dislikes";

            default:
                return null;
        }
    }

    const getIcon = () => {
        if (item.value === undefined)
            return favourite;

        switch (item.value) {
            case 1:
                return like;

            case 0:
                return dislike;

            default:
                return null;
        }
    }

    return (
        <div className="activity-item">
            <div className="activity-item-time">{formatTime()}</div>
            <div className="activity-item-text-faded">Image ID:</div>
            <div className="activity-item-text-bold">{item.image_id}</div>
            <div className="activity-item-text-faded">was added to {getLabel()}</div>
            <div className="activity-item-icon">
                <img alt={'activity icon'} src={getIcon()}></img>
            </div>
        </div>
    );
}

export default ActivityItem;