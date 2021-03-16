import React, { Component } from 'react';
import BoardView from '../components/BoardView'
import DetailsContainer from './DetailsContainer'
import { connect } from 'react-redux'
import { fetchProblems } from '../actions/index'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

class ProblemContainer extends Component {
    componentDidMount() {
        // this.props.fetchProblems();
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md="auto"><BoardView game={this.props.problem}/></Col>
                    <Col md="auto"><DetailsContainer game={this.props.problem}/></Col>
                </Row>
            </Container>
        );
    }
}

export default connect(null, { fetchProblems })(ProblemContainer);