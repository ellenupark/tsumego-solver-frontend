import React, { Component } from 'react';
import DetailsSummary from '../components/DetailsSummary'
import DetailsButtons from '../components/DetailsButtons'
import { connect } from 'react-redux'

class DetailsContainer extends Component {
    render() {
        return (
            <div>
                <DetailsSummary player={this.props.game.board.player}/>
                <DetailsButtons id={this.props.game.board.id} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        game: state
    }
}

export default connect(mapStateToProps)(DetailsContainer);
