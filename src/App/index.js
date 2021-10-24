import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { store } from '../config/redux';
import './App.css';
import { Register, Login, Dashboard, Artikel, Home, Galeri, TentangKami } from '../pages';
import Header from '../components/besar/Header';
import Footer from '../components/besar/Footer';

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
          <Route path="/artikel" component={Artikel} />
          <Route path="/galeri" component={Galeri} />
          <Route path="/tentangkami" component={TentangKami} />
          <Footer />
        </div>
      </Router >
    </Provider>
  );
}

export default App;
