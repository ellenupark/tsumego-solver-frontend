export const fetchProblems = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/problems')
        .then(resp => resp.json())
        .then(problems => {
            const allProblems = problems.data.map((problem) => {
                return {...problem.attributes, board: convertStringToBoard(problem.attributes.board, problem.attributes.board_size), currentBoard: convertStringToBoard(problem.attributes.board, problem.attributes.board_size), answer: convertStringToBoard(problem.attributes.answer, problem.attributes.board_size)}
            })
            dispatch({ type: "SET_PROBLEM", payload: allProblems })
        })
    }
}

export const submitAnswer = (problem) => {
    const correct = checkForCorrectAnswer(problem)

    let data = {
        attempts: problem.attempts += 1,
        solved: correct === true ? problem.solved += 1 : problem.solved
    }

    let options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };
    debugger
    return(dispatch) => {
        return fetch(`http://localhost:3000/problems/${problem.id.toString()}`, options)
        .then(resp => {
            resp.json()
        })
        .then(problem => {
            debugger
            let updatedProblem = {...problem.data.attributes, board: convertStringToBoard(problem.data.attributes.board, problem.data.attributes.board_size), currentBoard: convertStringToBoard(problem.data.attributes.board, problem.data.attributes.board_size), answer: convertStringToBoard(problem.data.attributes.answer, problem.data.attributes.board_size)}
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
    let submit = problem;

    let answerArray = [[], [], [], [], [], [], [], [], []];

    for (let i = 0; i < problem.board_size; i++) {
        for (let j = 0; j < problem.board_size; j++) {
            answerArray[i].push(problem.board[i][j])
        }
    }

    let problemBoard = [...problem.board]

    const row = parseInt(problem.move.split('-')[0]);
    const col = parseInt(problem.move.split('-')[1]);

    problemBoard[row][col] = 0;

    submit.answer = [...answerArray]
    submit.board = [...problemBoard] 

    submit.board = convertBoardToString(submit.board, 9);
    submit.answer = convertBoardToString(submit.answer, 9);

    delete submit.active;

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(submit)
    };

    return(dispatch) => {
        // return fetch(`http://localhost:3000/problems`, options)
        return fetch(`http://localhost:3000/problems`, options)
        .then(resp => resp.json())
        .then(problem => {
            let newProblem = {...problem.data.attributes, board: convertStringToBoard(problem.data.attributes.board, problem.data.attributes.board_size), currentBoard: convertStringToBoard(problem.data.attributes.board, problem.data.attributes.board_size), answer: convertStringToBoard(problem.data.attributes.answer, problem.data.attributes.board_size)}
            dispatch({ type: "SUBMIT_PROBLEM", payload: newProblem })
        })
        
    }
}

function convertStringToBoard(string, board_size) {
    let  result = [];
    let  count = 0;
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

function convertBoardToString(array, board_size) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (j === board_size - 1 && i !== board_size - 1) {
                result += (array[i][j].toString())
                result += ('-')
            } else {
                result += (array[i][j].toString())
            }
        }
    }
    return result;
}

function checkForCorrectAnswer(problem) {
    for (let i = 0; i < problem.answer.length; i++) {
        for (let j = 0; j < problem.answer.length; j++) {
            if (problem.answer[i][j] !== problem.currentBoard[i][j]) {
                return false;
            }
        }
    }
    return true;
}