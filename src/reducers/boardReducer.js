// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {problems: [], errors: ""}, action) => {
    switch (action.type) {
        case 'PLAY_MOVE':
            let newState = state.allProblems.map(problem => {return {...problem}})

            const currentProblem = newState.find(problem => problem.id === action.payload.id);
            const currentProblemId = newState.findIndex(problem => problem === currentProblem);

             // Check that intersection does not have a locked stone 
            if (currentProblem.board[action.payload.row][action.payload.col] === 0) {
                // Check if intersection is currently empty
                if (currentProblem.currentBoard[action.payload.row][action.payload.col] === 0) {
                    // Remove last played stone
                    for (let i = 0; i < currentProblem.board_size; i++) {
                        for (let j = 0; j < currentProblem.board_size; j++) {
                            if (currentProblem.currentBoard[i][j] !== currentProblem.board[i][j]) {
                                newState[currentProblemId].currentBoard[i][j] = 0;
                            }
                        }
                    }
                    // Play stone
                    newState[currentProblemId].player === 'Black' ? newState[currentProblemId].currentBoard[action.payload.row][action.payload.col] = 1 : newState[currentProblemId].currentBoard[action.payload.row][action.payload.col] = 2;
                } else {
                    // Remove existing stone
                    newState[currentProblemId].currentBoard[action.payload.row][action.payload.col] = 0; 
                }
            }
            return {
                allProblems: [...newState],
                errors: ''
            };
        case "SET_PROBLEM":
            return {
                ...state,
                allProblems: [...action.payload],
            }
        case "SUBMIT_PROBLEM":
            return {
                ...state,
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
  
  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
//   let store = createStore(boardReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//   export default store