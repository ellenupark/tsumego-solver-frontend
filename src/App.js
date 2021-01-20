import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProblemContainer from './containers/ProblemContainer'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchProblems } from './actions/index'
import AnswerContainer from './containers/AnswerContainer'
import CreateProblemContainer from './containers/CreateProblemContainer'
import Submitted from './components/Submitted'
import NavBar from './components/NavBar'

class App extends Component {

  componentDidMount() {
    this.props.fetchProblems();
  }

  renderProblem = (routerProps) => {
    let problemId = parseInt(routerProps.match.params.id)
    let foundProblem = this.props.problems.board.find(problem => problem.id === problemId)
    return (foundProblem ? <ProblemContainer problem={foundProblem} /> : <div/>)
  }

  renderAnswer = (routerProps) => {
    let problemId = parseInt(routerProps.match.params.id)
    let foundProblem = this.props.problems.board.find(problem => problem.id === problemId)
    return (foundProblem ? <AnswerContainer problem={foundProblem} /> : <div/>)
  }

  checkForEmptyBoard = (problem) => {
    for (let i = 0; i < problem.board_size; i++) {
      for (let j = 0; j < problem.board_size; j++) {
        if (problem.currentBoard[i][j] !== problem.board[i][j]) {
          return false
        }
      }
    }
    return true
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/problems" component={NavBar} />
          <Route exact path = '/problems/:id/answer' render = {routerProps => this.renderAnswer(routerProps)} />
          <Route exact path = '/problems/create' component={CreateProblemContainer} />
          <Route exact path = '/problems/submitted' component={Submitted} />
          <Route exact path = '/problems/:id' render = {routerProps => this.renderProblem(routerProps)} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    problems: state
  }
}

export default connect(mapStateToProps, { fetchProblems })(App);

