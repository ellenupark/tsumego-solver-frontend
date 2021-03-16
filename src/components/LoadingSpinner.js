import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <h3>Waking up dynos...</h3>
            <h3>Thank you for your patience.</h3>
            <Spinner animation="border" role="status" />
        </div>
    );
};

export default LoadingSpinner;