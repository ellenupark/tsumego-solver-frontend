import React, { Component } from 'react';

class Percentage extends Component {
    calculcatePercentage = (attempts, solved) => {
        const percentageFloat = solved / attempts;
        const percentage = Math.round(percentageFloat * 100)
        return percentage.toString();
    }

    render() {
        return (
            <div className="flex-wrapper">
                <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart orange">
                        <path className="circle-bg"
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path className="circle"
                            strokeDasharray={`${this.calculcatePercentage(this.props.attempts, this.props.solved)}, 100`}
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" className="percentage">{`${this.calculcatePercentage(this.props.attempts, this.props.solved)}%`}</text>
                    </svg>
                </div>
                <div className="chart-description">
                    <p>Users Solved Correctly</p>
                </div>
            </div>
        );
    }
}

export default Percentage;
