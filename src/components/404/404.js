import './404.css';

import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found-text">
                Ooops 404! The page you are looking for does not exist...
            </div>
            <Link className="not-found-link" to="/">Go Home</Link>
        </div>
    );
}

export default NotFound;