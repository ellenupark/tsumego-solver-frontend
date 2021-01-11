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
                    <Link to={`/problems/create`} style={{textDecoration: 'none'}}><Button variant="success" size="lg">Create</Button>{' '}</Link>
                    <Link to={`/problems/${this.props.id}`} style={{textDecoration: 'none'}}><Button variant="success" size="lg">Browse</Button>{' '}</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    if (state.board.length < 1) {
        return {
            id: "1"
        }
    } 
    
    
    const officialProblems = state.board.filter(board => board.user_made === false );
    return {
        id: officialProblems[Math.floor(Math.random() * officialProblems.length)].id
    }
}

export default connect(mapStateToProps, { fetchProblems })(Home);
