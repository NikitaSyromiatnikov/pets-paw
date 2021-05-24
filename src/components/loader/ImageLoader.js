import './ImageLoader.css';

import ContentLoader from 'react-content-loader';

const ImageLoader = () => {
    return (
        <ContentLoader className="image-loader">
            <rect x="0" y="0" rx="20" ry="20" width="640" height="360" />
        </ContentLoader>
    );
}

export default ImageLoader;