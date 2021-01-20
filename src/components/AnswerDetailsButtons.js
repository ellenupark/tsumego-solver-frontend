import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

class AnswerDetailsButtons extends Component {
    selectNextProblem = (props) => {
        const currentProblemId = this.props.id;
        let nextProblemId = currentProblemId;
    
        while (nextProblemId === currentProblemId) {
            if (props.find(problem => problem.id === this.props.id).user_made === false) {
                nextProblemId = props.filter(board => board.user_made === false)[Math.floor(Math.random() * props.filter(board => board.user_made === false).length)].id
            } else {
                nextProblemId = props.filter(board => board.user_made === true)[Math.floor(Math.random() * props.filter(board => board.user_made === true).length)].id
            }
        }
        return nextProblemId;
    }

    render() {
        return (
            <div className="answer-details">
                <Link to={`/problems/${this.selectNextProblem(this.props.problems)}`} style={{textDecoration: 'none'}}><Button variant="success" size="lg">Next Problem</Button>{' '}</Link>
                <Link to={`/problems/${this.props.id}`} style={{textDecoration: 'none'}}><Button variant="secondary" size="lg">Try Again?</Button>{' '}</Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        problems: state.problems.allProblems
    }
}

export default connect(mapStateToProps)(AnswerDetailsButtons);
