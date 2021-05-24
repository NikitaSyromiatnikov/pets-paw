import { Link, useLocation } from 'react-router-dom';

/** 
*   NavLink 
*
*   @param {string} image 
*   @param {string} to
*   @param {string} alt 
*
*   Styles defined in ./Nav.css file
*   
*   Has own method active() which is calculated with useLocation()
*   if pathname contains links destination - it is active
*/
const NavLink = ({ image, to, alt }) => {
    const location = useLocation();

    const active = () => {
        return location.pathname.includes(to);
    }

    return (
        <Link className={`nav-link ${active() ? "active" : ""}`} to={to}>
            <img src={image} alt={alt}></img>
        </Link>
    );
}

export default NavLink;