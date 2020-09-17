import React from 'react';
import {Header} from './components/Header/Header.jsx';
import {Lanches} from './components/LaunchList/LaunchList.jsx';
import Launchdisplay from './components/Launchdisplay/Launchdisplay.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="space-app">
      
      <Router>
        <Header />
        <Switch>
        <Route path='/launchinfo/:flight_number'>
          <Launchdisplay />
        </Route>
        <Route path='/'>
          <Lanches />
        </Route>
                </Switch>
      </Router>
    </div>
  );
}
export default App;


