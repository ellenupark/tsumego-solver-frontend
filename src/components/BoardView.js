import React, { Component } from 'react';
import { connect } from 'react-redux'
import BoardIntersections from './BoardIntersections'
import { playMove } from '../actions/index'
import { v4 as uuidv4 } from 'uuid';

const GRID_SIZE = 40;

class BoardView extends Component {

    handleSubmit = (row, col) => {
        this.props.playMove({row: row, col: col, id: this.props.game.id});
    }

    render() {
        const intersections = [];

        const style = {
            width: this.props.game.board_size * GRID_SIZE + 4,
            height: this.props.game.board_size * GRID_SIZE + 4
        };

        for (let i = 0; i < this.props.game.board_size; i++) {
            for (let j = 0; j < this.props.game.board_size; j++) {
                intersections.push(<BoardIntersections key={uuidv4()} board={this.props.game} row={i} col={j} handleSubmit={this.handleSubmit}/>);
            }
        }
        return <div style={style} id="board">{intersections}</div>
        
    }
}

export default connect(null, { playMove })(BoardView);
