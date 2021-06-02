import './NoItems.css';

const NoItems = ({ label }) => {
    return (
        <div className="no-items-container">
            <p className="no-items">{label}</p>
        </div>
    )
}

export default NoItems;