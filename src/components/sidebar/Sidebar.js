import './Sidebar.css';

import Logo from '../logo/Logo';
import SidebarText from './SidebarText';
import SidebarLinks from './SidebarLinks';

/*
*   Sidebar Component
*
*   Has no params
*
*   Styles defined in ./Sidebar.css file
*   A wrapper component for Logo, SidebarText and SidebarLinks components  
*   It is visible at any page of application
*/
const Sidebar = () => {
    return (
        <div className="sidebar">
            <Logo />
            <SidebarText />
            <SidebarLinks />
        </div>
    );
}

export default Sidebar;