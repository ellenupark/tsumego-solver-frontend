import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { submitProblem } from '../actions/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class CreateDetailsButtons extends Component {

    handleSubmit = (e) => {
        this.props.submitProblem(this.props.problem)
    }
    render() {
        return (
            <div className="create-buttons">
                <Button onClick={this.props.toggleActive} variant="primary" size="lg">Add Solution</Button>{' '}
                <Link to={'/problems/submitted'} style={{textDecoration: 'none'}}><Button onClick={this.handleSubmit} variant="success" size="lg" disabled={this.props.problem.move === ""} > Submit Problem</Button>{' '}</Link>
                <Button onClick={this.props.resetBoard} variant="secondary" size="lg">Reset</Button>{' '}
            </div>
        );
    }
}

export default connect(null, { submitProblem })(CreateDetailsButtons);
