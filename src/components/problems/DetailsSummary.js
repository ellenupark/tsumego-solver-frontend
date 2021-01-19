import { React } from 'react';

const DetailsSummary = (props) => {
    return (
        <div>
            <h2>{props.prompt}</h2>
            <p>Solve in 1 Turn</p>
        </div>
    );
}

export default DetailsSummary;