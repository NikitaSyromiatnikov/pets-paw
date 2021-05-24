import './VotingImage.css';

import VotingButtons from '../voting-buttons/VotingButtons';

const VotingImage = ({ image }) => {
    return (
        <div className="voting-image-container">
            <img className="voting-image" src={image.url} alt="dog"></img>
            <VotingButtons id={image.id} />
        </div>
    );
}

export default VotingImage;