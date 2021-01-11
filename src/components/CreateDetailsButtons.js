import React, { Component } from 'react';

class CreateDetailsButtons extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.toggleActive} >Add Solution</button>
            </div>
        );
    }
}

export default CreateDetailsButtons;
