import React, { Component } from 'react';
import { connect } from 'react-redux'
import BoardIntersections from './BoardIntersections'

const GRID_SIZE = 40;

class BoardView extends Component {

    handleSubmit = (row, col) => {
        this.props.dispatch({type: "PLAY_STONE", payload: {row: row, col: col}})
    }

    render() {
        var intersections = [];

        var style = {
            width: this.props.board.size * GRID_SIZE,
            height: this.props.board.size * GRID_SIZE
        };
        
        for (let i = 0; i < this.props.board.size; i++) {
            for (var j = 0; j < this.props.board.size; j++) {
                intersections.push(<BoardIntersections board={this.props.board} row={i} col={j} handleSubmit={this.handleSubmit}/>);
            }
        }
        return <div style={style} id="board">{intersections}</div>
    }
}

const mapStateToProps = state => {
    return {
        board: state
    }
}

export default connect(mapStateToProps)(BoardView);
