import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchProblems } from '../actions/index'


class Home extends Component {
    componentDidMount() {
        this.props.fetchProblems();
    }

    render() {
        return (
            <div>
                <h2>This is the home page</h2>
                <Link to={`/problems/${this.props.id}`}><button>Practice</button></Link>
                <button>Create</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    if (state.board[Math.floor(Math.random() * state.board.length)] === undefined) {
        return {
            id: "2"
        }
    } 
    return {
        id: state.board[Math.floor(Math.random() * state.board.length)].id
    }
}

export default connect(mapStateToProps, { fetchProblems })(Home);
