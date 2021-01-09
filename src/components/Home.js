import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>This is the home page</h2>
                <a href='http://localhost:3001/problems'><button>Practice</button></a>
                <button>Create</button>
            </div>
        );
    }
}

export default Home;
