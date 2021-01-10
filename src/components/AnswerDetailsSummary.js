import React, { Component } from 'react';

class AnswerDetailsSummary extends Component {
    checkForCorrectAnswer = (board) => {
        for (let i = 0; i < board.answer.length; i++) {
            for (let j = 0; j < board.answer.length; j++) {
                if (board.answer[i][j] !== board.currentBoard[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    render() {
        if (this.checkForCorrectAnswer(this.props.problem)) {
            return (
                <div>
                    <h2>You are Correct!</h2>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>Incorrect Answer!</h2>
                </div>
            );
        }
    }
}

export default AnswerDetailsSummary;
