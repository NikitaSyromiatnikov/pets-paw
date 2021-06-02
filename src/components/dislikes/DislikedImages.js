import NoItems from '../noitems/NoItems';
import DislikedImage from './DislikedImage';

const DislikedImages = ({ images }) => {
    return (
        <div className="liked-images">
            {images.map((image, index) => <DislikedImage key={index} image={image} vote_id={image.vote_id} />)}
            {images.length === 0 && <NoItems label='You have no disliked images yet' />}
        </div>
    );
}

export default DislikedImages;