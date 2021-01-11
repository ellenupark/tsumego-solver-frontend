import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { submitProblem } from '../actions/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class CreateDetailsButtons extends Component {
    render() {
        if (this.props.problem.move === "") {
            return (
                <div>
                    <Button onClick={this.props.toggleActive} variant="success" size="lg">Add Solution</Button>{' '}
                    <Link to={'/submitted'} style={{textDecoration: 'none'}}><Button onClick={() => this.props.submitProblem(this.props.problem)} variant="success" size="lg" disabled>Submit Problem</Button>{' '}</Link>
                    <Button onClick={this.props.resetBoard} variant="secondary" size="lg">Reset</Button>{' '}
                </div>
            );
        } else {
            return (
                <div>
                    <Button variant="success" size="lg" disabled>Add Solution</Button>{' '}
                    <Link to={'/submitted'} style={{textDecoration: 'none'}}><Button onClick={() => this.props.submitProblem(this.props.problem)} variant="success" size="lg">Submit Problem</Button>{' '}</Link>
                    <Button onClick={this.props.resetBoard} variant="secondary" size="lg">Reset</Button>{' '}
                </div>
            );
        }
    }
}

export default connect(null, { submitProblem })(CreateDetailsButtons);
