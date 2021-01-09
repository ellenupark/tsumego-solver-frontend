export const fetchProblem = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/problems')
        .then(resp => resp.json())
        .then(problem => {
            const board = {...problem.data[0].attributes, board: convertStringToBoard(problem.data[0].attributes.board, problem.data[0].attributes.size), answer: convertStringToBoard(problem.data[0].attributes.answer, problem.data[0].attributes.size)}
            dispatch({ type: "SET_PROBLEM", payload: board })
        })
    }
}

export const playMove = move => {
    return {
        type: "PLAY_MOVE",
        payload: move
    }
}

function convertStringToBoard(string, size) {
    let  result = [];
    let  count = 0;
    for (let  i = 0; i < size; i++) {
        result.push([])
    }
    for (let  i = 0; i < string.length; i++) {
        if (string[i] !== '-') {
            result[count].push(parseInt(string[i]))
        } else {
            count += 1;
        }
    }
    return  result;
}

function convertBoardToString(array, size) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (j === size - 1 && i !== size - 1) {
                result += (array[i][j].toString())
                result += ('-')
            } else {
                result += (array[i][j].toString())
            }
        }
    }
    return result;
}