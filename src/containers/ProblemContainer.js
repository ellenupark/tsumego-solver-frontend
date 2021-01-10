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
        // if (this.props.game.board.size === undefined) {
        //     return (
        //         <Spinner animation="border" role="status">
        //             <span className="sr-only">Loading...</span>
        //         </Spinner>
        //     )
        // }
        return (
            <div className="board-container">
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