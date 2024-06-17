import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
