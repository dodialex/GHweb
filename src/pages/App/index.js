import logo from '../../assets/logo/logo.svg';
import './App.css';
import firebase from '../../config/firebase'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';

console.log('confi nya >>', firebase)

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
