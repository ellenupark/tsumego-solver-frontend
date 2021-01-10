import { React } from 'react';
import { submitAnswer } from '../actions/index'
import { connect } from 'react-redux'

const DetailsButtons = (props) => {
    return (
        <div>
            <button onClick={() => props.submitAnswer(props.problems.find(problem => problem.id === props.id))}>Submit</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        problems: state.board
    }
}

export default connect(mapStateToProps, { submitAnswer })(DetailsButtons);
