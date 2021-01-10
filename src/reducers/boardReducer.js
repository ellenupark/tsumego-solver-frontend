// import { createStore } from 'redux'
// import Board from '../js/board'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case 'PLAY_MOVE':
            const newState = {...state};
            if (newState.board[action.payload.row][action.payload.col] === 0) {
                // newState.board[action.payload.row][action.payload.col] = 0
            // } else {
                if (newState.currentBoard[action.payload.row][action.payload.col] === 0) {
                    newState.player === 'Black' ? newState.currentBoard[action.payload.row][action.payload.col] = 1 : newState.currentBoard[action.payload.row][action.payload.col] = 2;
                } else {
                    newState.currentBoard[action.payload.row][action.payload.col] = 0; 
                }
            }
            // newState.current_color === 1 ? newState.current_color = 2 : newState.current_color = 1
            return newState;
        case "SET_PROBLEM":
            return [...action.payload]
        default:
            return state
    }
}
  
  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
//   let store = createStore(boardReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//   export default store