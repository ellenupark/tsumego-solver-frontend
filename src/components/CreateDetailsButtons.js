import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { submitProblem } from '../actions/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class CreateDetailsButtons extends Component {

    handleSubmit = (e) => {
        console.log('a')
        this.props.submitProblem(this.props.problem)
        console.log('g')
    }
    render() {
        if (this.props.problem.move === "") {
            return (
                <div className="create-buttons">
                    <Button onClick={this.props.toggleActive} variant="primary" size="lg">Add Solution</Button>{' '}
                    <Link to={'/problems/submitted'} style={{textDecoration: 'none'}}><Button onClick={this.handleSubmit} variant="success" size="lg" disabled>Submit Problem</Button>{' '}</Link>
                    <Button onClick={this.props.resetBoard} variant="secondary" size="lg">Reset</Button>{' '}
                </div>
            );
        } else {
            return (
                <div className="create-buttons">
                    <Button variant="primary" size="lg" disabled>Add Solution</Button>{' '}
                    <Link to={'/problems/submitted'} style={{textDecoration: 'none'}}><Button onClick={this.handleSubmit} variant="success" size="lg">Submit Problem</Button>{' '}</Link>
                    <Button onClick={this.props.resetBoard} variant="secondary" size="lg">Reset</Button>{' '}
                </div>
            );
        }
    }
}

export default connect(null, { submitProblem })(CreateDetailsButtons);
