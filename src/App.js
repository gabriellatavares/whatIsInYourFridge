import Navbar from './components/Navbar'
import Home from './components/Home'
import Favorites from './components/Favorites'
import Details from './components/Details'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/favs" component={Favorites} />
      <Route exact path="/details" component={Details} />
    </Router>
  );
}

export default App;
