import { Link } from 'react-router-dom';

import './BackLink.css';
import back from './back.svg';

/*
*   Takes base and label params
*
*   Styles are defined in ./BackLink.css file
* 
*   It's basicaly a link with a label, navigation item
*   but you always have to pass params because it will break the application
*   without them 
*/
const BackLink = ({ base, label }) => {
    return (
        <div className="back-link">
            <Link className="back-link-image-wrapper" to={base}>
                <img className="back-link-image" src={back} alt="go back"></img>
            </Link>
            <div className="back-link-label">{label}</div>
        </div>
    );
}

export default BackLink;