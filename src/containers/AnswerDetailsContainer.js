import React, { Component } from 'react';
import AnswerDetailsSummary from '../components/AnswerDetailsSummary'
import AnswerDetailsButtons from '../components/AnswerDetailsButtons'
import Percentage from '../components/Percentage'



class AnswerDetailsContainer extends Component {
    render() {
        return (
            <div>
                <AnswerDetailsSummary problem={this.props.game}/>
                <AnswerDetailsButtons id={this.props.game.id} />
                <Percentage attempts={this.props.game.attempts} solved={this.props.game.solved} />
            </div>
        );
    }
}

export default AnswerDetailsContainer;
