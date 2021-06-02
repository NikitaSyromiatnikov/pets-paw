import './RefreshButton.css';

import refresh from './images/refresh.svg';

const RefreshButton = ({ refreshFunction }) => {
    return (
        <button className="refresh-button" onClick={refreshFunction}>
            <img className="refresh-button-image" src={refresh} alt='refresh'></img>
        </button>
    )
}

export default RefreshButton;