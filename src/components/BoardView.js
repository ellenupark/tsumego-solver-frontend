import React, { Component } from 'react';
import { connect } from 'react-redux'
import BoardIntersections from './BoardIntersections'
import { playMove } from '../actions/index'

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
                intersections.push(<BoardIntersections board={this.props.game} row={i} col={j} handleSubmit={this.handleSubmit}/>);
            }
        }
        return <div style={style} id="board">{intersections}</div>
        
    }
}

// const mapStateToProps = state => {
//     return {
//         game: state
//     }
// }

export default connect(null, { playMove })(BoardView);
