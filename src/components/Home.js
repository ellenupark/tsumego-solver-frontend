import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchProblems } from '../actions/index'
import { removeErrors } from '../actions/index'
import Button from 'react-bootstrap/Button'

class Home extends Component {
    componentDidMount() {
        // this.props.fetchProblems();
        this.props.removeErrors()
    }

    filterUserCreated = () => {
        const problems = this.props.problems.filter(problem => problem.user_made === true);
        if (problems.length < 1) {
            return 1;
        } else {
            return problems[Math.floor(Math.random() * problems.length)].id;
        }
    }

    filterOfficial = () => {
        const problems = this.props.problems.filter(problem => problem.user_made === false);
        if (problems.length < 1) {
            return 1;
        }
        return problems[Math.floor(Math.random() * problems.length)].id;
    }

    render() {
        return (
            <div className="home-page">
                <div>
                    <h2>TSUMEGO SOLVER</h2>
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
        problems: state.problems.allProblems
    }
}

export default connect(mapStateToProps, { fetchProblems, removeErrors })(Home);
