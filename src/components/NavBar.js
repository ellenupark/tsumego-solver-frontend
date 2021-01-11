import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <Link to={"/"} style={{textDecoration: 'none'}}><Button variant="success" size="sm">Home</Button>{' '}</Link>
            </div>
        );
    }
}

export default NavBar;
