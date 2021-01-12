// import { createStore } from 'redux'
// import Board from '../js/board'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case 'PLAY_MOVE':
            let newState = state.map(problem => {return {...problem}})

            const currentProblem = newState.find(problem => problem.id === action.payload.id);
            const currentProblemId = newState.findIndex(problem => problem === currentProblem);

            if (currentProblem.board[action.payload.row][action.payload.col] === 0) {
                // newState.board[action.payload.row][action.payload.col] = 0
            // } else {
                if (currentProblem.currentBoard[action.payload.row][action.payload.col] === 0) {
                    for (let i = 0; i < currentProblem.board_size; i++) {
                        for (let j = 0; j < currentProblem.board_size; j++) {
                            if (currentProblem.currentBoard[i][j] !== currentProblem.board[i][j]) {
                                newState[currentProblemId].currentBoard[i][j] = 0;
                            }
                        }
                    }
                    newState[currentProblemId].player === 'Black' ? newState[currentProblemId].currentBoard[action.payload.row][action.payload.col] = 1 : newState[currentProblemId].currentBoard[action.payload.row][action.payload.col] = 2;
                } else {
                    newState[currentProblemId].currentBoard[action.payload.row][action.payload.col] = 0; 
                }
            }
            // newState.current_color === 1 ? newState.current_color = 2 : newState.current_color = 1
            return newState;
        case "SET_PROBLEM":
            return [...action.payload]
        case "SUBMIT_PROBLEM":
            return [...state, action.payload]
        case "SUBMIT_ANSWER":
            let updatedState = state.map(problem => {return {...problem}})
            const updatedProblemId = updatedState.findIndex(problem => problem.id === action.payload.id);
            
            updatedState[updatedProblemId].attempts = action.payload.attempts; 
            updatedState[updatedProblemId].solved = action.payload.solved; 

            return updatedState;
        default:
            return state
    }
}
  
  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
//   let store = createStore(boardReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//   export default store