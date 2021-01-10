import { React } from 'react';

const DetailsSummary = (props) => {
    return (
        <div>
            <h2>{props.player} to Capture</h2>
            <p>Solve in 1 Turn</p>
        </div>
    );
}

export default DetailsSummary;