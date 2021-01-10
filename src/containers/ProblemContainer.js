import React, { Component } from 'react';
import BoardView from '../components/BoardView'
import DetailsContainer from './DetailsContainer'
import { connect } from 'react-redux'
import { fetchProblems } from '../actions/index'
import Spinner from 'react-bootstrap/Spinner'

class ProblemContainer extends Component {
    componentDidMount() {
        this.props.fetchProblems();
    }

    render() {
        if (this.props.game.board.size === undefined) {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        }

        return (
            <div className="board-container">
                <BoardView />
                <DetailsContainer />
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