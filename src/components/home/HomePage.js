import home from './home.png';
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="home">
            <img className="home-image" src={home} alt="girl and pet"></img>
        </div>
    );
}

export default HomePage;