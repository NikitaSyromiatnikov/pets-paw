import NavLink from './NavLink';

import likes from './images/likes.svg';
import favourites from './images/favourites.svg';
import dislikes from './images/dislikes.svg';

/** 
*   Takes no params
*
*   Styles defined in ./Nav.css file
*
*   Nav Links loads different images and collects 
*   all NavLinks components into a one 
*/
const NavLinks = () => {
    return (
        <div className="nav-links">
            <NavLink image={likes} to='/voting/likes' alt='likes' />
            <NavLink image={favourites} to='/voting/favourites' alt='favourites' />
            <NavLink image={dislikes} to='/voting/dislikes' alt='dislikes' />
        </div>
    );
}

export default NavLinks;