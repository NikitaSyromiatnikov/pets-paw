import cross from './images/delete.svg';

import { useDispatch } from "react-redux";
import { fetchDeleteVote } from '../../api/client';

const DislikedImage = ({ image, vote_id }) => {
    const dispatch = useDispatch();

    const deleteImage = () => { fetchDeleteVote(vote_id, dispatch); }

    return (
        <div className="liked-image-container">
            <div className="image-delete">
                <button className="image-delete-button" onClick={deleteImage}>
                    <img className="image-delete-button-image" src={cross} alt="cross"></img>
                </button>
            </div>
            {image.image && <img className="liked-image" src={image.image.url} alt='dog'></img>}
        </div>
    );
}

export default DislikedImage;