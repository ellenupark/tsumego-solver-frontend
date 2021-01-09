import React, { Component } from 'react';
import BoardView from '../components/BoardView'
import DetailsContainer from './DetailsContainer'

class ProblemContainer extends Component {
    render() {
        return (
            <div className="board-container">
                <BoardView />
                <DetailsContainer />
            </div>
        );
    }
}


export default ProblemContainer;