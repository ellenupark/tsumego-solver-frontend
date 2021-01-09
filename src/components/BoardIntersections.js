import React, { Component } from 'react';

const GRID_SIZE = 40;

class BoardIntersections extends Component {

    render() {
        let classes = "intersection";

        if (this.props.board.board[this.props.row][this.props.col] === 1) {
            classes += " black"
        } else if (this.props.board.board[this.props.row][this.props.col] === 2) {
            classes += " white"
        }

        var style = {
            top: this.props.row * GRID_SIZE,
            left: this.props.col * GRID_SIZE
        };

        return (
            <div onClick={() => this.props.handleSubmit(this.props.row, this.props.col)} className={classes} style={style}></div>
        )
    }
}

export default BoardIntersections;
