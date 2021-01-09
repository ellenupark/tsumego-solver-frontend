import React, { Component } from 'react';
import BoardView from '../components/BoardView'

class BoardContainer extends Component {
    render() {
        return (
            <div className="board-container">
                <BoardView />
            </div>
        );
    }
}


export default BoardContainer;