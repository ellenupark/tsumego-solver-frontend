import React, { Component } from 'react';
import CreateBoardView from '../components/CreateBoardView'
import CreateDetailsContainer from './CreateDetailsContainer'


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
            active: false
        }
    }

    setStone(i, j) {
        if (this.state.active && this.state.board[i][j] === 0) {
            this.setState({
                move: `${i.toString()}${j.toString()}`
            })
            this.toggleActive();
        }

        if (this.state.board[i][j] !== 0) {
            this.setState({
                board: this.updateBoard(i, j, 0)
            })
            return true;
        }

        this.setState({
            board: this.updateBoard(i, j, this.state.current_color),
            current_color: this.state.current_color === 1 ? 2 : 1,
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
            current_color: this.state.active ? this.state.current_color : 1
        })
    }

    resetBoard = () => {
        this.setState({
            board: this.convertStringToBoard("000000000-000000000-000000000-000000000-000000000-000000000-000000000-000000000-000000000", 9),
            move: "",
            current_color: 1
        })
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
            <div className="board-container">
                <CreateBoardView board={this.state} setStone={(i, j) => this.setStone(i, j)} />
                <CreateDetailsContainer board={this.state} toggleActive={() => this.toggleActive()} resetBoard={() => this.resetBoard()}/>
            </div>
        );
    }
}

export default CreateProblemContainer;
