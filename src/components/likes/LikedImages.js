import NoItems from '../noitems/NoItems';
import LikedImage from './LikedImage';

const LikedImages = ({ images }) => {
    return (
        <div className="liked-images">
            {images.map((image, index) => <LikedImage key={index} image={image} vote_id={image.vote_id} />)}
            {images.length === 0 && <NoItems label='You have no liked images yet' />}
        </div>
    );
}

export default LikedImages;