import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProblemContainer from './containers/ProblemContainer'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchProblems } from './actions/index'
import AnswerContainer from './containers/AnswerContainer'
import CreateProblemContainer from './containers/CreateProblemContainer'
import Submitted from './components/Submitted'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'

class App extends Component {

  componentDidMount() {
    this.props.fetchProblems();
  }

  renderProblem = (routerProps) => {
    let problemId = parseInt(routerProps.match.params.id)
    let foundProblem = this.props.problems.find(problem => problem.id === problemId)
    return (foundProblem ? <ProblemContainer problem={foundProblem} /> : <div/>)
  }

  renderAnswer = (routerProps) => {
    let problemId = parseInt(routerProps.match.params.id)
    let foundProblem = this.props.problems.find(problem => problem.id === problemId)
    return (foundProblem ? <AnswerContainer problem={foundProblem} /> : <div/>)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path={["/problems/:id/answer", '/problems/create', '/problems/submitted', '/problems/:id']} component={NavBar} />
          <Switch>
            <Route path = '/problems/:id/answer' render = {routerProps => this.renderAnswer(routerProps)} />
            <Route path = '/problems/create' component={CreateProblemContainer} />
            <Route path = '/problems/submitted' component={Submitted} />
            <Route path = '/problems/:id' render = {routerProps => this.renderProblem(routerProps)} />
            <Route exact path="/" component={Home} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    problems: state.problems.allProblems
  }
}

export default connect(mapStateToProps, { fetchProblems })(App);

