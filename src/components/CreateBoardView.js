import React, { Component } from 'react';
import CreateIntersections from './CreateIntersections'
import { v4 as uuidv4 } from 'uuid';

const GRID_SIZE = 40;

class CreateBoardView extends Component {
    render() {
        const intersections = [];

        const style = {
            width: this.props.board.board_size * GRID_SIZE + 4,
            height: this.props.board.board_size * GRID_SIZE + 4
        };

        for (let i = 0; i < this.props.board.board_size; i++) {
            for (let j = 0; j < this.props.board.board_size; j++) {
                intersections.push(<CreateIntersections key={uuidv4()} problem={this.props.board} row={i} col={j} setStone={(i, j) => this.props.setStone(i, j)} />);
            }
        }
        return <div style={style} id="board">{intersections}</div>
        
    }
}

export default CreateBoardView;
