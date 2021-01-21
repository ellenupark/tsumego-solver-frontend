import { React } from 'react';

const CreateDetailsSummary = (props) => {
    return (
        <div>
            <h2>{props.problem.prompt}</h2>
            <p>Solve in 1 Turn</p>
        </div>
    );
}

export default CreateDetailsSummary;
