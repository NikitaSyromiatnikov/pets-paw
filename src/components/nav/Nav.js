import './Nav.css';

import Search from '../search/Search';
import NavLinks from './NavLinks';

/*
*   Takes no params
*
*   Combines Search and NavLinks components 
*   into one group
*/
const Nav = () => {
    return (
        <div className="navbar">
            <Search />
            <NavLinks />
        </div>
    );
}

export default Nav;