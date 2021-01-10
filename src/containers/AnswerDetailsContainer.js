import React, { Component } from 'react';
import AnswerDetailsSummary from '../components/AnswerDetailsSummary'
import AnswerDetailsButtons from '../components/AnswerDetailsButtons'


class AnswerDetailsContainer extends Component {
    render() {
        return (
            <div>
                <AnswerDetailsSummary problem={this.props.game}/>
                <AnswerDetailsButtons id={this.props.game.id} />
            </div>
        );
    }
}

export default AnswerDetailsContainer;
