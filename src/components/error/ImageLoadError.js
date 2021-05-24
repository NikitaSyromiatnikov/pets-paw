import './ImageLoadError.css';

const ImageLoadError = (props) => {
    return (
        <div className="image-load-error">
            <h1 className="image-load-error-text">
                {props.message}
            </h1>
        </div>
    );
}

export default ImageLoadError;