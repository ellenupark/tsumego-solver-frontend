import React, { Component } from 'react';
import CreateBoardView from '../components/CreateBoardView'
import CreateDetailsContainer from './CreateDetailsContainer'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Switch from "react-switch";


class CreateProblemContainer extends Component {
    constructor() {
        super()
        this.state = {
            board_size: 9,
            board: this.convertStringToBoard("000000000-000000000-000000000-000000000-000000000-000000000-000000000-000000000-000000000", 9),
            answer: this.convertStringToBoard("000000000-000000000-000000000-000000000-000000000-000000000-000000000-000000000-000000000", 9),
            move: "",
            player: "Black",
            attempts: 0,
            solved: 0,
            current_color: 1,
            user_made: true,
            active: false,
            prompt: "Black to Capture",
            checked: false
        }
    }

    setStone(row, col) {
        
        if (this.state.active && this.state.board[row][col] === 0) {
            this.setState({
                move: `${row.toString()}-${col.toString()}`
            })
            this.toggleActive();
        }

        if (this.state.board[row][col] !== 0) {
            this.setState({
                board: this.updateBoard(row, col, 0)
            })
            return true;
        }

        this.setState({
            board: this.updateBoard(row, col, this.state.current_color),
            // current_color: this.state.current_color === 1 ? 2 : 1,
        })
        return true;
    };

    // Returns state object
    updateBoard = (i, j, color) => {
        let board = this.state.board;
        board[i][j] = color;
        return board;
    }

    toggleActive = () => {
        this.setState({
            active: !this.state.active,
            current_color: this.state.active ? this.state.current_color : 1,
            checked: false
        })
    }

    resetBoard = () => {
        this.setState({
            board: this.convertStringToBoard("000000000-000000000-000000000-000000000-000000000-000000000-000000000-000000000-000000000", 9),
            move: "",
            current_color: 1,
            checked: false
        })
    }

    handleChange = (checked) => {
        const color = this.state.checked === false ? 2 : 1;
        this.setState({checked: !this.state.checked, current_color: color });
    }

    convertStringToBoard = (string, board_size) => {
        let result = [];
        let count = 0;
        for (let  i = 0; i < board_size; i++) {
            result.push([])
        }
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== '-') {
                result[count].push(parseInt(string[i]))
            } else {
                count += 1;
            }
        }
        return  result;
    }

    render() {
        
        return (
            <Container fluid>
                <Row>
                    <Col md="auto">
                        <label>
                            <Switch offHandleColor="#2e2e2e" onHandleColor="#FFF" checkedIcon={false} uncheckedIcon={false} onColor="#D3D3D3" offColor="#D3D3D3" onChange={this.handleChange} checked={this.state.checked} />
                        </label>
                    </Col>
                    <Col md="auto"><CreateBoardView board={this.state} setStone={(i, j) => this.setStone(i, j)} /></Col>
                    <Col md="auto"><CreateDetailsContainer onChange={this.handleChange} checked={this.state.checked} board={this.state} toggleActive={() => this.toggleActive()} resetBoard={() => this.resetBoard()}/></Col>
                </Row>
            </Container>
        );
    }
}

export default CreateProblemContainer;
