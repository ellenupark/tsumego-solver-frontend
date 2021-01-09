export const fetchProblem = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/problems')
        .then(resp => resp.json())
        .then(problem => {
            dispatch({ type: "SET_PROBLEM", payload: problem })
        })
    }
}

export const playMove = move => {
    return {
        type: "PLAY_MOVE",
        payload: move
    }
}