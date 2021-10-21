import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import './App.css';

const initialState = {
  popup: false,
  isLogin: false
}

const reducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_POPUP') {
    return {
      ...state,
      popup: action.value
    }
  }
  if (action.type === 'CHANGE_ISLOGIN') {
    return {
      ...state,
      isLogin: action.value
    }
  }
  return state;
}
const store = createStore(reducer)


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router >
    </Provider>
  );
}

export default App;
