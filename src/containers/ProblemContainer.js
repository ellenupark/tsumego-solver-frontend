import React, { Component } from 'react';
import BoardView from '../components/BoardView'
import DetailsContainer from './DetailsContainer'
import { connect } from 'react-redux'
import { fetchProblems } from '../actions/index'

class ProblemContainer extends Component {
    componentDidMount() {
        this.props.fetchProblems();
    }

    render() {
        return (
            <div>
                <BoardView game={this.props.problem}/>
                <DetailsContainer game={this.props.problem}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        game: state
    }
}

export default connect(mapStateToProps, { fetchProblems })(ProblemContainer);