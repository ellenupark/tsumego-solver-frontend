import React, { Component } from 'react';
import BoardAnswerView from '../components/BoardAnswerView'
import AnswerDetailsContainer from './AnswerDetailsContainer'

class AnswerContainer extends Component {
    render() {
        return (
            <div className="board-container">
                <BoardAnswerView game={this.props.problem}/>
                <AnswerDetailsContainer game={this.props.problem}/>
            </div>
        );
    }
}

export default AnswerContainer;