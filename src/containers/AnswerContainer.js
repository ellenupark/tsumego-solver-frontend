import React, { Component } from 'react';
import BoardView from '../components/BoardView'
import AnswerDetailsContainer from './AnswerDetailsContainer'
import { fetchProblems } from '../actions/index'
import { connect } from 'react-redux'

class AnswerContainer extends Component {
    componentDidMount() {
        this.props.fetchProblems();
    }

    render() {
        return (
            <div className="board-container">
                <BoardView game={this.props.problem}/>
                <AnswerDetailsContainer game={this.props.problem}/>
            </div>
        );
    }
}

export default connect(null, { fetchProblems })(AnswerContainer);