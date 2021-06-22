import Navbar from './Navbar'
import Home from './Home'
import Favorites from './Favorites'
import Details from './Details'

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
