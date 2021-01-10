import React, { Component } from 'react';
import { connect } from 'react-redux'

class AnswerDetailsButtons extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        id: state.board[Math.floor(Math.random() * state.board.length)].id
    }
}

export default connect(mapStateToProps)(AnswerDetailsButtons);
