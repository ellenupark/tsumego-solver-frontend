import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProblemContainer from './containers/ProblemContainer'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/problems" component={ProblemContainer} />
      </div>
    </Router>
  );
}

export default App;

