import { React } from 'react';

const GRID_SIZE = 40;

const CreateIntersections = (props) => {
    let classes = "intersection active-board";

    if (props.problem.board[props.row][props.col] === 1) {
        classes += " black"
    } else if (props.problem.board[props.row][props.col] === 2) {
        classes += " white"
    }

    var style = {
        top: props.row * GRID_SIZE,
        left: props.col * GRID_SIZE
    };

    return (
        <div onClick={() => props.setStone(props.row, props.col)} className={classes} style={style}></div>
    )
}

export default CreateIntersections;
