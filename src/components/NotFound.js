import { React } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                <h2>Oops.</h2>
                <p>The page you are trying to reach does not exist!</p>
                <Link to={'/'} style={{textDecoration: 'none'}}><Button variant="success" size="lg">Return to Tsumego Solver</Button>{' '}</Link>
            </div>
        </div>
    );
}

export default NotFound;
