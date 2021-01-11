import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

class CreateDetailsButtons extends Component {
    render() {
        if (this.props.problem.move === "") {
            return (
                <div>
                    <Button onClick={this.props.toggleActive} variant="success" size="lg">Add Solution</Button>{' '}
                    <Button variant="success" size="lg" disabled>Submit Problem</Button>{' '}
                    <Button onClick={this.props.resetBoard} variant="secondary" size="lg">Reset</Button>{' '}
                </div>
            );
        } else {
            return (
                <div>
                    <Button variant="success" size="lg" disabled>Add Solution</Button>{' '}
                    <Button variant="success" size="lg">Submit Problem</Button>{' '}
                    <Button onClick={this.props.resetBoard} variant="secondary" size="lg">Reset</Button>{' '}
                </div>
            );
        }
    }
}

export default CreateDetailsButtons;
