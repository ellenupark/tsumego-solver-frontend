export const fetchProblems = () => {
    return(dispatch) => {
        return fetch('https://tsumego-solver-backend.herokuapp.com/problems')
        .then(resp => resp.json())
        .then(problems => {
            const allProblems = problems.data.map(problem => ({...problem.attributes, currentBoard: JSON.parse(JSON.stringify(problem.attributes.board))}));
            dispatch({ type: "SET_PROBLEM", payload: allProblems })
        })
    }
}

export const submitAnswer = (problem) => {
    const correct = checkForCorrectAnswer(problem)
    const empty = checkForEmptyBoard(problem);

    if (empty) return {type: "ADD_EMPTY_BOARD_ERROR", payload: problem}

    const data = {
        attempts: problem.attempts += 1,
        solved: correct === true ? problem.solved += 1 : problem.solved,
        board: problem.board,
        answer: problem.answer
    }

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };
    
    return(dispatch) => {
        return fetch(`https://tsumego-solver-backend.herokuapp.com/problems/${problem.id}`, options)
        .then(resp => resp.json())
        .then(problem => {
            let updatedProblem = {...problem.data.attributes, currentBoard: JSON.parse(JSON.stringify(problem.data.attributes.board)) }
            dispatch({ type: "SUBMIT_ANSWER", payload: updatedProblem })
        })
        
    }
}

export const playMove = move => {
    return {
        type: "PLAY_MOVE",
        payload: move
    }
}

export const submitProblem = problem => {
    // Set answer
    problem.answer = JSON.parse(JSON.stringify(problem.board)); 

    // Prepare initial board state
    const row = parseInt(problem.move.split('-')[0]);
    const col = parseInt(problem.move.split('-')[1]);

    problem.board[row][col] = 0;

    // Delete active attribute before sending to database
    delete problem.active;

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(problem)
    };

    return(dispatch) => {
        return fetch(`https://tsumego-solver-backend.herokuapp.com/problems`, options)
        .then(resp => resp.json())
        .then(problem => {
            let newProblem = {...problem.data.attributes, currentBoard: JSON.parse(JSON.stringify(problem.data.attributes.board))}
            dispatch({ type: "SUBMIT_PROBLEM", payload: newProblem })
        })
        
    }
}

export const removeErrors = () => {
    return {
        type: "REMOVE_ERRORS",
        payload: "remove"
    }
}

function checkForCorrectAnswer(problem) {
    return (JSON.stringify(problem.answer) === JSON.stringify(problem.currentBoard) ? true : false);
}

function checkForEmptyBoard(problem) {
    return (JSON.stringify(problem.currentBoard) === JSON.stringify(problem.board) ? true : false);
}