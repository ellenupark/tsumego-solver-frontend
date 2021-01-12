import React, { Component } from 'react';
import DetailsSummary from '../components/DetailsSummary'
import DetailsButtons from '../components/DetailsButtons'
// import { connect } from 'react-redux'

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

// const mapStateToProps = state => {
//     return {
//         game: state
//     }
// }

export default DetailsContainer;
