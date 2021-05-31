import LikedImage from './LikedImage';

const LikedImages = ({ images }) => {
    return (
        <div className="liked-images">
            {images.map((image, index) => <LikedImage key={index} image={image} />)}
        </div>
    );
}

export default LikedImages;