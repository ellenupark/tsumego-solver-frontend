import React, { Component } from 'react';
import BoardView from '../components/BoardView'
import { connect } from 'react-redux'

class BoardContainer extends Component {
    onBoardUpdate() {
        this.setState({"board": this.props.board});
    }

    render() {
        return (
            <div className="board-container">
                <BoardView board={this.props.board} 
                    onPlay={this.onBoardUpdate.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        board: state
    }
}

export default connect(mapStateToProps)(BoardContainer);