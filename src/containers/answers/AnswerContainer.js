import React, { Component } from 'react';
import BoardAnswerView from '../../components/answers/BoardAnswerView'
import AnswerDetailsContainer from './AnswerDetailsContainer'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

class AnswerContainer extends Component {
    render() {
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

export default AnswerContainer;