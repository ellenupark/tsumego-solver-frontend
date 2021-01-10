import { React } from 'react';
import { submitAnswer } from '../actions/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const DetailsButtons = (props) => {
    return (
        <div>
            <Link to={`/problems/${props.id}/answer`} style={{textDecoration: 'none'}}><Button  onClick={() => props.submitAnswer(props.problems.find(problem => problem.id === props.id))} variant="success" size="lg">Submit</Button>{' '}</Link>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        problems: state.board
    }
}

export default connect(mapStateToProps, { submitAnswer })(DetailsButtons);
