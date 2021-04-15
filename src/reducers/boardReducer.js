// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {allProblems: [], errors: "", loading: true}, action) => {
    switch (action.type) {
        case 'PLAY_MOVE':
            const newState = JSON.parse(JSON.stringify(state.allProblems));
            const currentProblem = newState.find(problem => problem.id === action.payload.id);

            // Check if space is empty
            if (currentProblem.currentBoard[action.payload.row][action.payload.col] === 0) {

                // Remove previously placed stones (reset board)
                currentProblem.currentBoard = JSON.parse(JSON.stringify(currentProblem.board));
                
                // Play stone
                currentProblem.player === 'Black' ? currentProblem.currentBoard[action.payload.row][action.payload.col] = 1 : currentProblem.currentBoard[action.payload.row][action.payload.col] = 2;
            
            // If user clicked on an existing stone, check if it is a permanent stone or a user placed stone
            } else if (currentProblem.board[action.payload.row][action.payload.col] === 0) {
                // If user placed stone, remove it
                currentProblem.currentBoard[action.payload.row][action.payload.col] = 0; 
            }

            return {
                ...state,
                errors: '',
                allProblems: [...newState]
            };
        case "SET_PROBLEM":
            return {
                ...state,
                allProblems: [...action.payload],
                loading: false
            }
        case "SUBMIT_PROBLEM":
            return {
                ...state,
                errors: '',
                allProblems: [...state.allProblems, action.payload],
            }
        case "SUBMIT_ANSWER":
            let updatedState = state.allProblems.map(problem => {return {...problem}})
            const updatedProblemId = updatedState.findIndex(problem => problem.id === action.payload.id);
            
            updatedState[updatedProblemId].attempts = action.payload.attempts; 
            updatedState[updatedProblemId].solved = action.payload.solved; 

            return {
                ...state,
                allProblems: updatedState,
            };
        case "ADD_EMPTY_BOARD_ERROR":
            return {
                ...state,
                errors: "Must play stone before submitting"
            }
        case "REMOVE_ERRORS":
            return {
                ...state,
                errors: ""
            }
        default:
            return state
    }
}