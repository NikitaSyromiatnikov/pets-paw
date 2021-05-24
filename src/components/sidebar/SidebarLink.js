import { Link, useLocation } from 'react-router-dom';

/*
*   Represents a Sidebar Link item
*
*   @param {string} link destination
*   @param {image} link image obviously
*   @param {string} link label
*
*   This component has no style props but they are defined
*   in css section ./Sidebar.css 
*   
*   Sidebar Links have different image-container backgrounds
*   and borders which are set with :nth-child pseudoclass
*   
*   This component also has active 'state' which depends on 
*   current location
*/
const SidebarLink = ({ to, image, label }) => {
    const location = useLocation();

    const active = () => {
        return location.pathname.includes(to);
    }

    return (
        <Link className={`sidebar-link ${active() ? "active" : ""}`} to={to}>
            <div className="sidebar-link-image-container">
                <img className="sidebar-link-image" src={image} alt={to}></img>
            </div>
            <div className="sidebar-link-label">{label}</div>
        </Link>
    );
}

export default SidebarLink;