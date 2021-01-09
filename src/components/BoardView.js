import React, { Component } from 'react';

const GRID_SIZE = 40;

class BoardView extends Component {
    handleSubmit = (row, col) => {
        if (this.props.board.play(row, col)) {
            this.props.onPlay();
        }
    }

    createIntersections = (position) => {
        var style = {
            top: position.row * GRID_SIZE,
            left: position.col * GRID_SIZE
        };

        var classes = "intersection";
        if (position.color !== 0) {
            classes += position.color === 1 ? " black" : " white";
        }

        return (
            <div onClick={() => position.handleSubmit(position.row, position.col)} className={classes} style={style}></div>
        );
    }

    render() {
        var intersections = [];
        for (let i = 0; i < this.props.board.size; i++) {
            for (var j = 0; j < this.props.board.size; j++) {
                intersections.push(this.createIntersections({
                    board: this.props.board,
                    color: this.props.board.board[i][j],
                    row: i,
                    col: j,
                    onPlay: this.props.onPlay,
                    handleSubmit: this.handleSubmit
                }));
            }
        }
        var style = {
            width: this.props.board.size * GRID_SIZE,
            height: this.props.board.size * GRID_SIZE
        };
        return <div style={style} id="board">{intersections}</div>
    }
}

export default BoardView;
