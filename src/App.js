import React from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import First from './Components/First';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={First}></Route>
          <Route exact path='/nav' component={Navbar}></Route>
          <Route exact path='/signin' component={Signin}></Route>
          <Route exact path='/signup' component={Signup}></Route>
        </Switch>
      </Router>    
    </div>
  );
}

export default App;


