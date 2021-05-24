import SidebarLink from './SidebarLink';

import vote from './images/vote.png';
import breeds from './images/breeds.png';
import gallery from './images/gallery.png';

/*
*   Takes no params   
*
*   Styles are defined in ./Sidebar.css file
*
*   Represents a set of Sidebar Links
*   this component has data to pass to them 
*   it loads images, link destination and label properties
*   to be displayed inside of a child ciomponents
*/
const SidebarLinks = () => {
    return (
        <div className="sidebar-links">
            <SidebarLink image={vote} to='/voting' label="voting" />
            <SidebarLink image={breeds} to='/breeds' label="breeds" />
            <SidebarLink image={gallery} to='/gallery' label="gallery" />
        </div>
    );
}

export default SidebarLinks;