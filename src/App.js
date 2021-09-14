import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Users'>Users</Link>
        <Link to='/strict-access'>Strict Access</Link>
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/users/:id' render={(props) => <Users {...props} greetingsMessage="Good Morning"/>}/>
          <Route path='/strict-access' render={() => <StrictAccess user={{username: 'joão', password: '12' }} />} />
          <Route path exact='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
