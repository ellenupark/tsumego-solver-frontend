import { createStore } from 'redux'
import Board from '../js/board'


const board = new Board(9);

function todosReducer(state = board, action) {
    switch (action.type) {

      default:
        return state
    }
  }
  
  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
  let store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  export default store