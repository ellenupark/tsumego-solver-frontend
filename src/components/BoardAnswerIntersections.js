import React, { Component } from 'react';

const GRID_SIZE = 40;

class BoardAnswerIntersections extends Component {
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

    retrieveCorrectMove = (board) => {
        let row = parseInt(board.move.split('')[0]);
        let col = parseInt(board.move.split('')[1]);

        return {row: row, col: col};
    }

    render() {
        const correct = this.checkForCorrectAnswer(this.props.board);
        const stoneColor = this.props.board.player === "Black" ? ' black' : ' white';
        const move = this.retrieveCorrectMove(this.props.board)

        let classes = "intersection";
        if (this.props.row === move.row && this.props.col === move.col && correct) {
            classes += `${stoneColor} green`
        } else if (this.props.board.currentBoard[this.props.row][this.props.col] !== this.props.board.board[this.props.row][this.props.col] && !correct) {
            classes += `${stoneColor} red`
        } else if (this.props.board.currentBoard[this.props.row][this.props.col] === 1) {
            classes += " black"
        } else if (this.props.board.currentBoard[this.props.row][this.props.col] === 2) {
            classes += " white"
        }

        var style = {
            top: this.props.row * GRID_SIZE,
            left: this.props.col * GRID_SIZE
        };

        return (
            <div className={classes} style={style}></div>
        )
    }
}

export default BoardAnswerIntersections;