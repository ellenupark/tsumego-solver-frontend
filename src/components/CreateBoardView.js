import React, { Component } from 'react';
import CreateIntersections from './CreateIntersections'

const GRID_SIZE = 40;

class CreateBoardView extends Component {
    // handleSubmit = (row, col) => {
    //     this.props.playMove({row: row, col: col, id: this.props.game.id});
    // }

    render() {
        const intersections = [];

        const style = {
            width: this.props.board.board_size * GRID_SIZE + 4,
            height: this.props.board.board_size * GRID_SIZE + 4
        };

        for (let i = 0; i < this.props.board.board_size; i++) {
            for (let j = 0; j < this.props.board.board_size; j++) {
                intersections.push(<CreateIntersections problem={this.props.board} row={i} col={j} setStone={(i, j) => this.props.setStone(i, j)} />);
            }
        }
        return <div style={style} id="board">{intersections}</div>
        
    }
}

export default CreateBoardView;
