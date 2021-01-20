import React, { Component } from 'react';
import DetailsSummary from '../components/DetailsSummary'
import DetailsButtons from '../components/DetailsButtons'

class DetailsContainer extends Component {
    render() {
        return (
            <div className="details-container">
                <DetailsSummary prompt={this.props.game.prompt}/>
                <DetailsButtons id={this.props.game.id} />
            </div>
        );
    }
}

export default DetailsContainer;
