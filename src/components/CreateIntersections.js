import React, { Component } from 'react';

const GRID_SIZE = 40;

class CreateIntersections extends Component {
    render() {
        let classes = "intersection active-board";

        if (this.props.problem.board[this.props.row][this.props.col] === 1) {
            classes += " black"
        } else if (this.props.problem.board[this.props.row][this.props.col] === 2) {
            classes += " white"
        }

        var style = {
            top: this.props.row * GRID_SIZE,
            left: this.props.col * GRID_SIZE
        };

        return (
            <div onClick={() => this.props.setStone(this.props.row, this.props.col)} className={classes} style={style}></div>
        )
    }
}

export default CreateIntersections;
