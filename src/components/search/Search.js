import './Search.css';
import search from './search.svg';

const Search = () => {
    return (
        <div className="search-container">
            <input className="search-input" placeholder="Search for breeds by name" type="text"></input>
            <button className="search-button">
                <img className="search-button-image" src={search} alt="search"></img>
            </button>
        </div>
    );
}

export default Search;