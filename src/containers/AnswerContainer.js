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
        return (JSON.stringify(problem.currentBoard) === JSON.stringify(problem.board) ? true : false)
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