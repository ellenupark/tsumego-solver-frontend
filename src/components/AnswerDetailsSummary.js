import React, { Component } from 'react';

class AnswerDetailsSummary extends Component {
    checkForCorrectAnswer = problem => JSON.stringify(problem.answer) === JSON.stringify(problem.currentBoard);

    render() {
        return (
            <div>
                {this.checkForCorrectAnswer(this.props.problem) ? <h2>You are Correct!</h2> : <h2>Incorrect Answer!</h2>}
            </div>
        );
    }
}

export default AnswerDetailsSummary;
