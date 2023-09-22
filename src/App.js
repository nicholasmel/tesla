import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Model from './components/Model';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/model-s'>
            <Model model="Model S" />
          </Route>
          <Route path='/model-3'>
            <Model model="Model 3" />
          </Route>
          <Route path='/model-X'>
            <Model model="Model X" />
          </Route>
          <Route path='/model-Y'>
            <Model model="Model Y" />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
