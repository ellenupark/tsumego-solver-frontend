import React, { Component } from 'react';
import { connect } from 'react-redux'
import BoardIntersections from './BoardIntersections'
import { playMove } from '../actions/index'

const GRID_SIZE = 40;

class BoardView extends Component {

    handleSubmit = (row, col) => {
        this.props.playMove({row: row, col: col});
    }

    render() {
        const intersections = [];

        const style = {
            width: this.props.game.board.size * GRID_SIZE,
            height: this.props.game.board.size * GRID_SIZE
        };
        
        for (let i = 0; i < this.props.game.board.size; i++) {
            for (let j = 0; j < this.props.game.board.size; j++) {
                intersections.push(<BoardIntersections board={this.props.game.board} row={i} col={j} handleSubmit={this.handleSubmit}/>);
            }
        }
        return <div style={style} id="board">{intersections}</div>
    }
}

const mapStateToProps = state => {
    return {
        game: state
    }
}

export default connect(mapStateToProps, { playMove })(BoardView);
