import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { history } from './store';
import ProtectedRoute from './utils/guards';
import LoginContainer from './containers/userLoginContainer';
import RegisterContainer from './containers/userRegisterContainer';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="App-intro">
        <Router history={ history }>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/register" component={ RegisterContainer } />
            <Route exact path="/login" component={ LoginContainer } />
            <ProtectedRoute path="/dashboard" component={ Dashboard } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
