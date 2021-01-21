import { React } from 'react';
import CreateIntersections from './CreateIntersections'
import { v4 as uuidv4 } from 'uuid';

const GRID_SIZE = 40;

const CreateBoardView = (props) => {
    const intersections = [];

    const style = {
        width: props.board.board_size * GRID_SIZE + 4,
        height: props.board.board_size * GRID_SIZE + 4
    };

    for (let i = 0; i < props.board.board_size; i++) {
        for (let j = 0; j < props.board.board_size; j++) {
            intersections.push(<CreateIntersections key={uuidv4()} problem={props.board} row={i} col={j} setStone={(i, j) => props.setStone(i, j)} />);
        }
    }

    return <div style={style} id="board">{intersections}</div>    
}

export default CreateBoardView;
