import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchProblems } from '../actions/index'
import Button from 'react-bootstrap/Button'

class Home extends Component {
    componentDidMount() {
        this.props.fetchProblems();
    }

    render() {
        return (
            <div className="home-page">
                <div>
                    <h2>Tsumego Solver</h2>
                    <Link to={`/problems/${this.props.id}`} style={{textDecoration: 'none'}}><Button variant="success" size="lg">Practice</Button>{' '}</Link>
                    <Button variant="success" size="lg">Create</Button>{' '}
                    <Button variant="success" size="lg">Browse</Button>{' '}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    if (state.board[Math.floor(Math.random() * state.board.length)] === undefined) {
        return {
            id: "1"
        }
    } 
    return {
        id: state.board[Math.floor(Math.random() * state.board.length)].id
    }
}

export default connect(mapStateToProps, { fetchProblems })(Home);
