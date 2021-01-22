import React, { Component } from 'react';
import BoardAnswerView from '../components/BoardAnswerView'
import AnswerDetailsContainer from './AnswerDetailsContainer'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';


class AnswerContainer extends Component {
    checkForEmptyBoard(problem) {
        for (let i = 0; i < problem.board_size; i++) {
            for (let j = 0; j < problem.board_size; j++) {
                if (problem.currentBoard[i][j] !== problem.board[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    render() {
        if (this.props.errors || this.checkForEmptyBoard(this.props.problem)) {
            return <Redirect to={`/problems/${this.props.problem.id}`} /> 
        }
        return (
            <Container fluid className="board-container">
                <Row>
                    <Col md="auto"><BoardAnswerView game={this.props.problem}/></Col>
                    <Col md="auto"><AnswerDetailsContainer game={this.props.problem}/></Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        errors: state.problems.errors
    }
}

export default connect(mapStateToProps)(AnswerContainer);