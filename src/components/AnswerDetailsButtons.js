import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

class AnswerDetailsButtons extends Component {
    selectNextProblem = (state) => {
        const currentProblemId = this.props.id;
        let nextProblemId = currentProblemId;
    
        while (nextProblemId === currentProblemId) {
            if (state.board.find(problem => problem.id === this.props.id).user_made === false) {
                nextProblemId = state.board.filter(board => board.user_made === false)[Math.floor(Math.random() * state.board.filter(board => board.user_made === false).length)].id
            } else {
                nextProblemId = state.board.filter(board => board.user_made === true)[Math.floor(Math.random() * state.board.filter(board => board.user_made === true).length)].id
            }
        }
        return nextProblemId;
    }

    render() {
        return (
            <div>
                <Link to={`/problems/${this.selectNextProblem(this.props.problems)}`} style={{textDecoration: 'none'}}><Button variant="success" size="lg">Next Problem</Button>{' '}</Link>
                <Link to={`/problems/${this.props.id}`} style={{textDecoration: 'none'}}><Button variant="secondary" size="lg">Try Again?</Button>{' '}</Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        problems: state
    }
}

export default connect(mapStateToProps)(AnswerDetailsButtons);
