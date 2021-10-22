import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { store } from '../../config/redux';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import './App.css';
import Artikel from '../Artikel';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/artikel" component={Artikel} />
        </div>
      </Router >
    </Provider>
  );
}

export default App;
