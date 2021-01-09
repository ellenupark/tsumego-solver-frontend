// import { createStore } from 'redux'
// import Board from '../js/board'


// const board = new Board(9);

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

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
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
        case "SET_PROBLEM":
            return {...action.payload.data[0].attributes, board: convertStringToBoard(action.payload.data[0].attributes.board, action.payload.data[0].attributes.size)}
        default:
            return state
    }
}
  
  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
//   let store = createStore(boardReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//   export default store