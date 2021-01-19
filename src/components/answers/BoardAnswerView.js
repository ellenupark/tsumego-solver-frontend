import React, { Component } from 'react';
import BoardAnswerIntersections from './BoardAnswerIntersections'
import { v4 as uuidv4 } from 'uuid';

const GRID_SIZE = 40;

class BoardAnswerView extends Component {

    render() {
        const intersections = [];

        const style = {
            width: this.props.game.board_size * GRID_SIZE + 4,
            height: this.props.game.board_size * GRID_SIZE + 4
        };

        for (let i = 0; i < this.props.game.board_size; i++) {
            for (let j = 0; j < this.props.game.board_size; j++) {
                intersections.push(<BoardAnswerIntersections key={uuidv4()} board={this.props.game}  row={i} col={j} />);
            }
        }
        return <div style={style} id="board">{intersections}</div>
        
    }
}

export default BoardAnswerView;
