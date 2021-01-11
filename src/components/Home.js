import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchProblems } from '../actions/index'
import Button from 'react-bootstrap/Button'

class Home extends Component {
    componentDidMount() {
        this.props.fetchProblems();
    }

    filterUserCreated = () => {
        if (this.props.problems.length < 1) {
            return 1;
        }
        const problems = this.props.problems.filter(problem => problem.user_made === true);
        return problems[Math.floor(Math.random() * problems.length)].id;
    }

    filterOfficial = () => {
        if (this.props.problems.length < 1) {
            return 1;
        }
        const problems = this.props.problems.filter(problem => problem.user_made === false);
        return problems[Math.floor(Math.random() * problems.length)].id;
    }

    render() {
        return (
            <div className="home-page">
                <div>
                    <h2>Tsumego Solver</h2>
                    <Link to={`/problems/${this.filterOfficial()}`} style={{textDecoration: 'none'}}><Button variant="success" size="lg">Practice</Button>{' '}</Link>
                    <Link to={`/problems/create`} style={{textDecoration: 'none'}}><Button variant="success" size="lg">Create</Button>{' '}</Link>
                    <Link to={`/problems/${this.filterUserCreated()}`} style={{textDecoration: 'none'}}><Button variant="success" size="lg">Browse</Button>{' '}</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        problems: state.board
    }
}

export default connect(mapStateToProps, { fetchProblems })(Home);
