import React, { Component } from 'react';

class CreateDetailsSummary extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.problem.prompt}</h2>
                <p>Solve in 1 Turn</p>
            </div>
        );
    }
}

export default CreateDetailsSummary;
