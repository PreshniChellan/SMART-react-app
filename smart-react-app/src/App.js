import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Pages/Login/SignIn'
import Sales from './Pages/Sales';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/sales" component={() => <Sales authorized={true} />} />
      </Switch>
    </Router>
  );
}

export default App;
