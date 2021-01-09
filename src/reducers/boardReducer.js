// import { createStore } from 'redux'
import Board from '../js/board'


const board = new Board(9);

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = board, action) => {
    switch (action.type) {
        case 'PLAY_MOVE':
            const newState = {...state};
            if (newState.board[action.payload.row][action.payload.col] !== 0) {
                newState.board[action.payload.row][action.payload.col] = 0
            } else {
                newState.board[action.payload.row][action.payload.col] = newState.current_color;
            }

            newState.current_color === 1 ? newState.current_color = 2 : newState.current_color = 1
            return newState;
        default:
            return state
    }
}
  
  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
//   let store = createStore(boardReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//   export default store