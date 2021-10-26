import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { store } from '../config/redux';
import './App.css';
import { Register, Login, Dashboard, IbadahOnline, Home, TimPengembalaan, TentangKami, Taruna, NextGen, Youth, HaleluyaMinistry } from '../pages';
import { Header, Footer } from '../components/besar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/ibadahonline" component={IbadahOnline} />
          <Route path="/timpengembalaan" component={TimPengembalaan} />
          <Route path='/tentangkami' component={TentangKami} />
          <Route path='/taruna' component={Taruna} />
          <Route path='/nextgen' component={NextGen} />
          <Route path='/youth' component={Youth} />
          <Route path='/haleluyaministry' component={HaleluyaMinistry} />
          <Footer />
        </div>
      </Router >
    </Provider>
  );
}

export default App;
