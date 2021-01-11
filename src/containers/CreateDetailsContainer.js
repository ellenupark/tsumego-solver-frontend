import React, { Component } from 'react';
import CreateDetailsSummary from '../components/CreateDetailsSummary'
import CreateDetailsButtons from '../components/CreateDetailsButtons'

class CreateDetailsContainer extends Component {
    render() {
        return (
            <div>
                <CreateDetailsSummary problem={this.props.board} />
                <CreateDetailsButtons problem={this.props.board} toggleActive={this.props.toggleActive} resetBoard={this.props.resetBoard} />
            </div>
        );
    }
}

export default CreateDetailsContainer;
